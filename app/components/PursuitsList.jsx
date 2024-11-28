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
  StyleSheet,
  ImageBackground,
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
import calcTimer from "../utils/calcTimer";
import Colours from "../utils/Colours";
import { Styles } from "../utils/styles/login";

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

    pursuits.forEach((pursuit, index) => {
      if (
        calcTimer(pursuit.created_at, pursuit.pursuit_id) ===
        "Pursuit timer expired!"
      ) {
        pursuits.splice(index, 1);
      }
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

  if (
    orderedPursuits.every((pursuit) => {

      return (
        !pursuit.active || user.completedPursuits.includes(pursuit.pursuit_id)
      );

    })
  ) {
    return (
      <ImageBackground
        source={require("../../assets/triangleBG.png")}
        resizeMode="cover"
        style={style.image}
        imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
      >
        <View style={style.noPursuitCon}>
          <Text style={style.titleText}>
            Wow!! It seems as if you have no active pursuits, please swipe back
            to choose from a pursuit!! Gotta get those Pixels!!!
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={style.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
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
            the more pixels you will earn and climb up the leaderboards. Each
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
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  noPursuitCon: {
    margin: "50%",
    padding: 0.5,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: Colours.AQUA_BLUE,
    marginHorizontal: "auto",
  },
  text: {
    color: "black",
    fontSize: 18,
    margin: 10,
    padding: 10,
  },
  titleText: {
    margin: 2,
    marginVertical: 2,
    textAlign: "center",
    width: 300,
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
