import { Pressable, Text, View } from "react-native";
import { choosePursuits } from "../utils/styles/choosePursuits";
import { getDistance } from "geolib";

export function PursuitCard({
  pursuit,
  setModalVisible,
  setConfirmPursuit,
  location,
}) {
  const distance =
    getDistance(
      { latitude: location.latitude, longitude: location.longitude },
      { latitude: pursuit.target_lat, longitude: pursuit.target_long }
    ) / 1000;

  function handlePress() {
    setModalVisible(true);
    setConfirmPursuit({ id: pursuit.pursuit_id, title: pursuit.title });
  }

  return (
    <Pressable onPress={handlePress} style={choosePursuits.pursuitdCard}>
      <Text style={choosePursuits.cardText}>{pursuit.title}</Text>
      <Text style={choosePursuits.cardText}>{pursuit.difficulty}</Text>
      <Text style={choosePursuits.cardText}>{`${distance}km away`}</Text>
    </Pressable>
  );
}
