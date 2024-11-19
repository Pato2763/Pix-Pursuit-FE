import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";

export default function Accpet(props) {
  const { onPress, title = "Accpet & Continue" } = props;
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
