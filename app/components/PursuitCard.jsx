import { Pressable, Text, View } from "react-native";
import { choosePursuits } from "../utils/styles/choosePursuits";

export function PursuitCard({ pursuit, setModalVisible, setConfirmPursuit }) {
  function handlePress() {
    setModalVisible(true);
    setConfirmPursuit({ id: pursuit.pursuit_id, title: pursuit.title });
  }

  return (
    <Pressable onPress={handlePress} style={choosePursuits.pursuitdCard}>
      <Text style={choosePursuits.cardText}>{pursuit.title}</Text>
      <Text style={choosePursuits.cardText}>{pursuit.difficulty}</Text>
      <Text
        style={choosePursuits.cardText}
      >{`${pursuit.distance}km away`}</Text>
    </Pressable>
  );
}
