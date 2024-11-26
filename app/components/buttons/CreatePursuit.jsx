import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function CreatePursuit({ redirect }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CreatePursuit");
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>Create Pursuit</Text>
    </Pressable>
  );
}
