import { View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapViewer } from "../components/MapViewer";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import ChoosePursuit from "../components/buttons/FindPursuit.jsx";
import HostedPursuitInfo from "../components/HostedPuruitInfo.jsx";
import { getTrackedLocation } from "../utils/loaction.js";
import { useNavigation } from "@react-navigation/native";
import ConfirmLocation from "../components/buttons/Confirmlocation.jsx";

const HomeScreen = () => {
  const [trackedLocation, setTrackedLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const navigation = useNavigation();

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
        <HostedPursuitInfo />
        <ConfirmLocation />
      </View>
      <MapViewer />
    </SafeAreaView>
  );
};

export default HomeScreen;
