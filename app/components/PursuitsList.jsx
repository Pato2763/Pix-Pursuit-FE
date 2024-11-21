import { getLocation } from "../utils/loaction";
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { getPursuits, patchUsersCurrentPursuit } from "../api";
import { PursuitCard } from "./PursuitCard";
import { choosePursuits } from "../utils/styles/choosePursuits";
import { useNavigation } from "@react-navigation/native";

export function PursuitsList() {
  const [location, setLocation] = useState({});
  const [pursuits, setPursuits] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmPursuit, setConfirmPursuit] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    const { latitude, longitude } = location;
    getPursuits().then((closePursuits) => {
      setPursuits(closePursuits);
    });
  }, [location]);

  function handleConfirm() {
    patchUsersCurrentPursuit(26, confirmPursuit.id).then(() => {
      setConfirmPursuit({});
      setModalVisible(false);
      navigation.navigate("Home");
    });
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
        <View style={choosePursuits.pursuitsListContainer}>
          {pursuits.map((pursuit) => {
            if (pursuit.active) {
              return (
                <PursuitCard
                  key={pursuit.pursuit_id}
                  pursuit={pursuit}
                  setModalVisible={setModalVisible}
                  setConfirmPursuit={setConfirmPursuit}
                />
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
