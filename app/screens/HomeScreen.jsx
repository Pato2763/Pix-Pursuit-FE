import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation, getTrackedLocation } from "../utils/loaction";

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
    <SafeAreaView>
      <Text>in home screen actual</Text>
      <Text>
        {location[0]} {location[2]}
      </Text>
      <Text>
        {trackedLocation[0]} {trackedLocation[2]}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
