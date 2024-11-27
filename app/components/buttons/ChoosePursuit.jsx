import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function ChoosePursuit({ setIsActivePursuit }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChoosePursuits");
    setIsActivePursuit(true);
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>Find pursuit</Text>
    </Pressable>
  );
}
