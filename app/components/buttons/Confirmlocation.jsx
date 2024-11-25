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
    getPursuitbyPursuitID(user.pursuit_id).then((fetchedPursuit) => {
      setPursuit(fetchedPursuit);
    });
  }, []);

  const title = "Confirm Location";
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

      const distance = getDistance(userLocation, pursuitLocation);
      console.log(distance);
      navigation.navigate("Completed", {
        distance: distance,
        userLocation: userLocation,
        pursuitLocation: pursuitLocation,
        pursuit: pursuit,
      });
    });
  };

  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
