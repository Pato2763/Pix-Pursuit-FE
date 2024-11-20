import React from "react";
import { Text, Pressable } from "react-native";
import { blueButton } from "../../utils/styles/buttons";
import { useNavigation } from "@react-navigation/native";

export default function Accept({ tarRedirect }) {
  const navigation = useNavigation();

  const title = "Accept and Continue";
  const onPress = () => {
<<<<<<< HEAD
    navigation.navigate("HomeScreen");
=======
    navigation.navigate(tarRedirect);
>>>>>>> 4aba66b8be3e3fcd197d979e315a37e3ef31819d
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
