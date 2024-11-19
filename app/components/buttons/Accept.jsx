import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";

export default function Accept({ setAcceptedTerms }) {
  const title = "Accept and Continue";
  const onPress = () => {
    setAcceptedTerms(true);
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
