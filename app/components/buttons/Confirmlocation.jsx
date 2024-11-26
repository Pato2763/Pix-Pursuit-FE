import React, { useContext } from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { UserContext } from "../../context/UserContext";
import { getPursuitbyPursuitID } from "../../api";
import { useState, useEffect } from "react";
import { getLocation } from "../../utils/loaction.js";
import { useNavigation } from "@react-navigation/native";
import { getDistance } from "geolib";

export default function ConfirmLocation() {
  const { user } = useContext(UserContext);
  const [pursuit, setPursuit] = useState({});
  const [location, setLocation] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    console.log(user.pursuit_id);
    getPursuitbyPursuitID(user.pursuit_id)
      .then((fetchedPursuit) => {
        console.log(fetchedPursuit);
        setPursuit(fetchedPursuit);
      })
      .catch((err) => {
        setPursuit(null);
      });
  }, [user.pursuit_id]);

  const onPress = () => {
    getLocation().then((fetchedLocation) => {
      setLocation(fetchedLocation);

      const userLocation = {
        latitude: fetchedLocation.coords.latitude,
        longitude: fetchedLocation.coords.longitude,
      };
      const pursuitLocation = {
        latitude: pursuit.target_lat,
        longitude: pursuit.target_long,
      };

      console.log(userLocation, pursuitLocation);

      const distance = getDistance(userLocation, pursuitLocation);

      navigation.navigate("Completed", {
        distance: distance,
        userLocation: userLocation,
        pursuitLocation: pursuitLocation,
        pursuit: pursuit,
        won: distance <= 50 ? true : false,
      });
    });
  };

  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>Confirm location</Text>
    </Pressable>
  );
}
