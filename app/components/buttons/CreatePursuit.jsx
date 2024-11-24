import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function Accept({ redirect }) {
  const navigation = useNavigation();

  const title = "Create Pursuit";
  const onPress = () => {
    navigation.navigate(redirect);
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
