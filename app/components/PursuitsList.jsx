import { getLocation } from "../utils/loaction";
import {
  ActivityIndicator,
  Button,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import {
  getPursuitbyPursuitID,
  getPursuits,
  patchPursuit,
  patchUsersCurrentPursuit,
} from "../api";
import { PursuitCard } from "./PursuitCard";
import { choosePursuits } from "../utils/styles/choosePursuits";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import { getDistance } from "geolib";
import Loading from "./Loading";
import { getPursuitImage } from "../api";

export function PursuitsList() {
  const [location, setLocation] = useState({});
  const [pursuits, setPursuits] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmPursuit, setConfirmPursuit] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [orderedPursuits, setOrderedPursuits] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [imageData, setImageData] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    getLocation()
      .then((res) => {
        setLocation(res.coords);
        return res.coords;
      })
      .then((location) => {
        return getPursuits(location.latitude, location.longitude);
      })
      .then((closePursuits) => {
        return setPursuits(closePursuits);
      });
  }, [user]);

  useEffect(() => {
    pursuits.forEach((pursuit) => {
      pursuit.distance =
        getDistance(
          { latitude: location.latitude, longitude: location.longitude },
          { latitude: pursuit.target_lat, longitude: pursuit.target_long }
        ) / 1000;
    });

    pursuits.sort((a, b) => {
      return a.distance - b.distance;
    });

    setOrderedPursuits(pursuits);
    setIsLoading(false);
  }, [pursuits]);

  useEffect(() => {
    setImageLoading(true);
    getPursuitImage(confirmPursuit.id)
      .then((res) => {
        setImageData(res);
        setImageLoading(false);
      })
      .catch((err) => {
        setImageData(null);
        setImageLoading(false);
      });
  }, [confirmPursuit.id]);

  function handleConfirm() {
    patchUsersCurrentPursuit(user.user_id, confirmPursuit.id).then(
      (currentPursuitId) => {
        getPursuitbyPursuitID(currentPursuitId.pursuit_id).then(
          (currentPursuit) => {
            setConfirmPursuit({});
            setModalVisible(false);
            setUser((currUser) => {
              return {
                ...currUser,
                pursuit_id: currentPursuit.pursuit_id,
                currentPursuit,
              };
            });
            navigation.goBack();
          }
        );
      }
    );
  }

  function handleCancel() {
    setConfirmPursuit({});
    setModalVisible(false);
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Modal animationType="none" transparent={true} visible={modalVisible}>
          <View style={choosePursuits.centeredView}>
            <View style={choosePursuits.modalView}>
              <Text style={choosePursuits.imagePreviewText}>
                Here is your Pursuit image that you will be chasing:
              </Text>
              {imageLoading ? (
                <View style={choosePursuits.imageLoadingContainer}>
                  <Text>Your image is loading</Text>
                  <ActivityIndicator />
                </View>
              ) : (
                <Image
                  style={choosePursuits.previewImage}
                  source={{
                    uri: imageData,
                  }}
                />
              )}

              <Text>{`Are you sure you want to confirm ${confirmPursuit.title} as your active pursuit?`}</Text>
              <View style={choosePursuits.buttons}>
                <Button
                  title={"confirm"}
                  onPress={() => {
                    handleConfirm();
                  }}
                ></Button>
                <Button
                  title={"cancel"}
                  onPress={() => {
                    handleCancel();
                  }}
                ></Button>
              </View>
            </View>
          </View>
        </Modal>

        <View>
          <Text style={choosePursuits.titleText}>
            Choose from your local pursuits below. The faster you complete it
            the more points you will earn and climb up the leaderboards. Each
            pursuit will last 24 hours before it deactivates.
          </Text>
        </View>
        <View style={choosePursuits.pursuitsListContainer}>
          {orderedPursuits.map((pursuit) => {
            if (isLoading) {
              return (
                <View
                  key={pursuit.pursuit_id}
                  style={choosePursuits.pursuitdCard}
                >
                  <Loading />
                </View>
              );
            }
            if (
              pursuit.active &&
              pursuit.host_id !== user.user_id &&
              !user.completedPursuits.includes(pursuit.pursuit_id)
            ) {
              return (
                <PursuitCard
                  key={pursuit.pursuit_id}
                  pursuit={pursuit}
                  setModalVisible={setModalVisible}
                  setConfirmPursuit={setConfirmPursuit}
                  location={location}
                />
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
