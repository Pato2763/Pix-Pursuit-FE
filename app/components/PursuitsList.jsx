import { getLocation } from "../utils/loaction";
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { getPursuits, patchUsersCurrentPursuit } from "../api";
import { PursuitCard } from "./PursuitCard";
import { choosePursuits } from "../utils/styles/choosePursuits";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import { ActivePursuitContext } from "../context/ActivePursuitState";
import { ActivityIndicator } from "react-native";

export function PursuitsList() {
  const [location, setLocation] = useState({});
  const [pursuits, setPursuits] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmPursuit, setConfirmPursuit] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const { setActivePursuit } = useContext(ActivePursuitContext);

  const navigation = useNavigation();

  useEffect(() => {
    getLocation()
      .then((res) => {
        setLocation(res.coords);
        return res.coords;
      })
      .then((location) => {
        return getPursuits();
      })
      .then((closePursuits) => {
        return setPursuits(closePursuits);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  function handleConfirm() {
    patchUsersCurrentPursuit(user.user_id, confirmPursuit.id).then(
      (currentPursuit) => {
        setConfirmPursuit({});
        setModalVisible(false);
        setActivePursuit(currentPursuit.pursuit_id);
        navigation.navigate("Home");
      }
    );
  }

  function handleCancel() {
    setConfirmPursuit({});
    setModalVisible(false);
  }

  return (
    <SafeAreaView>
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={choosePursuits.centeredView}>
          <View style={choosePursuits.modalView}>
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
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={choosePursuits.pursuitsListContainer}>
            {pursuits.map((pursuit) => {
              if (pursuit.active) {
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
