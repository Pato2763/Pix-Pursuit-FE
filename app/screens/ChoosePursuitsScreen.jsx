import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation } from "../utils/loaction";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { getPursuits } from "../api";

export function ChoosePursuitScreen() {
  const [location, setLocation] = useState({});
  const [pursuits, setPursuits] = useState([]);

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    const { latitude, longitude } = location;
    getPursuits(latitude, longitude).then((closePursuits) => {
      setPursuits(closePursuits);
    });
  }, [location]);

  return (
    <SafeAreaView>
      {pursuits.map((pursuit) => {
        return <Text key={pursuit.pursuitID}>{pursuit.title}</Text>;
      })}
    </SafeAreaView>
  );
}
