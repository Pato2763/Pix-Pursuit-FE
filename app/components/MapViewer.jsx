import React from "react";
import { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colours from "../utils/Colours";
import Loading from "./Loading";
import { getLocation, getTrackedLocation } from "../utils/loaction";
import { useNavigation } from "@react-navigation/native";

export const MapViewer = () => {
  const [region, setRegion] = useState(null);
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

  useEffect(() => {
    if (
      trackedLocation &&
      trackedLocation.latitude &&
      trackedLocation.longitude
    ) {
      setRegion({
        latitude: trackedLocation.latitude,
        longitude: trackedLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [trackedLocation]);

  if (
    !trackedLocation ||
    !trackedLocation.latitude ||
    !trackedLocation.longitude
  ) {
    return (
      <View>
        <Loading />
        <Text>Loading location...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.infoContainer}></View>
      <View style={styles.container}>
        {region && (
          <MapView
            style={styles.map}
            region={region} // this state should stop the map zooming out fellas
            showsUserLocation={true} // blue dot for user
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "white",
  },
  infoContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  map: {
    width: "90",
    height: "100%",
    flex: 1,
    gap: 20,
    width: "80%",
    borderRadius: 10,
    padding: 5,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: Colours.AQUA_BLUE,
    marginHorizontal: "auto",
  },
});
