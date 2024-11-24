import { Button, View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLocation, getTrackedLocation } from "../utils/loaction";
import { MapViewer } from "../components/MapViewer";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Button
          title="create pursuit"
          onPress={() => {
            navigation.navigate("CreatePursuit");
          }}
        />
      </View>
      <MapViewer trackedLocation={trackedLocation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
