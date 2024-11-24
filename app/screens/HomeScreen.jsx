<<<<<<< HEAD
import { Button, View } from "react-native";
=======
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
>>>>>>> 0947359a918e621303357ab703f1613a13848194
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapViewer } from "../components/MapViewer";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import ChoosePursuit from "../components/buttons/FindPursuit.jsx";
import HostedPursuitInfo from "../components/HostedPuruitInfo.jsx";

const HomeScreen = () => {
<<<<<<< HEAD
  const [location, setLocation] = useState({});
  const [trackedLocation, setTrackedLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const navigation = useNavigation();

  useEffect(() => {
    setLocation(getLocation());
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

=======
>>>>>>> 0947359a918e621303357ab703f1613a13848194
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <CreatePursuit redirect={"CreatePursuit"} />
        <ChoosePursuit redirect={"ChoosePursuits"} />
        <HostedPursuitInfo />
      </View>
      <MapViewer />
    </SafeAreaView>
  );
};

export default HomeScreen;
