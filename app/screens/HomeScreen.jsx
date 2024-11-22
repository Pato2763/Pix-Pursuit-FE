import { Button, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation, getTrackedLocation } from "../utils/loaction";
import { MapViewer } from "../components/MapViewer";
import { useNavigation } from "@react-navigation/native";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import ChoosePursuit from "../components/buttons/FindPursuit.jsx";

const HomeScreen = () => {
  const [location, setLocation] = useState({});
  const [trackedLocation, setTrackedLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const navigation = useNavigation();

  useEffect(() => {
    getLocation(setLocation);
  }, []);

  useEffect(() => {
    let watchID = null;
    getTrackedLocation(setTrackedLocation).then((subscription) => {
      watchID = subscription;
    });
    return () => {
      if (watchID) {
        watchID.remove();
      }
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <CreatePursuit redirect={"CreatePursuit"} />
        <ChoosePursuit redirect={"ChoosePursuits"} />
      </View>
      <MapViewer trackedLocation={trackedLocation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
