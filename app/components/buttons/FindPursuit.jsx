import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function ChoosePursuit() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChoosePursuits");
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>Find pursuit</Text>
    </Pressable>
  );
}
