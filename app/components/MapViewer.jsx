import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colours from "../utils/Colours";

export const MapViewer = ({ trackedLocation }) => {
  if (
    !trackedLocation ||
    !trackedLocation.latitude ||
    !trackedLocation.longitude
  ) {
    return <Text>Loading location...</Text>;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.infoContainer}></View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: trackedLocation.latitude,
            longitude: trackedLocation.longitude,
            latitudeDelta: 0.0922, //these delta thing fellas are for zooming purpopes
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true} // this is the blue dot, the Marker shows a red pin drop which we dont want
        >
          {/* <Marker
            coordinate={{
              latitude: trackedLocation.latitude,
              longitude: trackedLocation.longitude,
            }}
          /> */}
        </MapView>
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
