import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Accept({ tarRedirect }) {
  const navigation = useNavigation();

  const title = "Create New Hunt";
  const onPress = () => {
    navigation.navigate(tarRedirect);
  };
  return (
    <Pressable style={blueButton.Accpet} onPress={onPress}>
      <Text style={blueButton.text}>{title}</Text>
    </Pressable>
  );
}
