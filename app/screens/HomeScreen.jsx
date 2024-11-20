import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation, getTrackedLocation } from "../utils/loaction";
import { MapViewer } from "../components/MapViewer";
import { Styles } from "../utils/styles/login";

const HomeScreen = () => {
  const [AcceptedTerms, setAcceptedTerms] = useState(false);
  const [location, setLocation] = useState({});
  const [trackedLocation, setTrackedLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

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
      <Text
        style={{
          backgroundColor: "white",
        }}
      ></Text>
      <MapViewer trackedLocation={trackedLocation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
