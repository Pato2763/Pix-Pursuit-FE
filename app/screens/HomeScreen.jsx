import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation, getTrackedLocation } from "../utils/loaction";
import { MapViewer } from "../components/MapViewer";

const HomeScreen = () => {
  const [AcceptedTerms, setAcceptedTerms] = useState(false);
  const [location, setLocation] = useState([]);
  const [trackedLocation, setTrackedLocation] = useState([]);

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
      <Text>Home Screen</Text>
      <MapViewer trackedLocation={trackedLocation} />
      <Text>
        {location?.latitude} {location?.longitude}
      </Text>
      <Text>
        {trackedLocation.latitude} {trackedLocation.longitude}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
