import { getLocation, getTrackedLocation } from "../utils/loaction";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export const MapViewer = ({ trackedLocation }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {trackedLocation.latitude && trackedLocation.longitude && (
          <Marker coordinate={trackedLocation} />
        )}
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
