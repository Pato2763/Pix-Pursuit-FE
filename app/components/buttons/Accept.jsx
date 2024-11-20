import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";

export default function Accept() {
  const navigation = useNavigation();

  const title = "Accept and Continue";
  const onPress = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
