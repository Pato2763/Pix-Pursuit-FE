import { getLocation, getTrackedLocation } from "../utils/loaction";
import { View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export const MapView = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker coordinate={getTrackedLocation} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
