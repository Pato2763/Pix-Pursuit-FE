import { Pressable, Text, View } from "react-native";
import { choosePursuits } from "../utils/styles/choosePursuits";

export function PursuitCard({ pursuit, setModalVisible, setConfirmPursuit }) {
  function handlePress() {
    setModalVisible(true);
    setConfirmPursuit({ id: pursuit.pursuit_id, title: pursuit.title });
  }
  let pursuitDistance = "?";
  if (pursuit.distance) {
    pursuitDistance = pursuit.distance.toFixed(1);
  }
  return (
    <Pressable onPress={handlePress} style={choosePursuits.pursuitdCard}>
      <Text style={choosePursuits.title}>{pursuit.title}</Text>
      <View style={choosePursuits.topDiv}>
        <Text
          style={[
            choosePursuits.difficulty,
            pursuit.difficulty === "Easy"
              ? choosePursuits.easy
              : pursuit.difficulty === "Medium"
              ? choosePursuits.medium
              : choosePursuits.hard,
          ]}
        >
          {pursuit.difficulty}
        </Text>
        <Text style={choosePursuits.cardText}>{`
        ${
          pursuitDistance > 1 ? pursuitDistance : "Less than 1"
        } km away`}</Text>
      </View>
    </Pressable>
  );
}
