import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function Accept() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Login");
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>Accept and continue</Text>
    </Pressable>
  );
}
