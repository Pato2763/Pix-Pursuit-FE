import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import Colours from "../utils/Colours";
import { SafeAreaView } from "react-native-safe-area-context";
import { blueButton } from "../utils/styles/buttons";
import { UserContext } from "../context/UserContext";
import {
  patchUsersCurrentPursuit,
  patchUsersPoints,
  postPursuitsCompletedByUsers,
} from "../api";

const PursuitCompletedScreen = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  const { distance, userLocation, pursuitLocation, won, pursuit } =
    route.params;

  if (won && user.pursuit_id) {
    postPursuitsCompletedByUsers(user.user_id, pursuit.pursuit_id)
      .then((points) => {
        return patchUsersPoints(user.user_id, points);
      })
      .then((fetchedUser) => {
        patchUsersCurrentPursuit(user.user_id, null);
      });
  }

  const Won = () => {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.infoContainer}>
          <Text>You Won! {distance}m off</Text>
        </View>
        <View style={styles.container}>
          <MapView style={styles.map}>
            <Marker coordinate={userLocation} pinColor="blue"></Marker>
            <Marker coordinate={pursuitLocation} pinColor="green"></Marker>
          </MapView>
        </View>
        <Pressable
          style={blueButton.Accpet}
          onPress={() => {
            setUser((currUser) => {
              return { ...currUser, pursuit_id: null };
            });
            navigation.goBack();
          }}
        >
          <Text style={blueButton.text}>Done</Text>
        </Pressable>
      </SafeAreaView>
    );
  };

  const Lost = () => {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.infoContainer}>
          <Text>You Lost, {distance}m off</Text>
        </View>
        <View style={styles.container}>
          <MapView style={styles.map}>
            <Marker coordinate={userLocation} pinColor="blue"></Marker>
            <Marker coordinate={pursuitLocation} pinColor="red"></Marker>
          </MapView>
        </View>
        <Pressable
          style={blueButton.Accpet}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={blueButton.text}>Done</Text>
        </Pressable>
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
  return won ? <Won /> : <Lost />;
};

export default PursuitCompletedScreen;
