import { Button, Pressable, View, Text } from "react-native";
import Accept from "./buttons/Accept";
import LoginScreen from "../screens/LoginScreen";

const HomeLoading = () => {
  return (
    <View style={[{ padding: 15, margin: 10 }]}>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        consectetur sunt officia hic, aut similique esse quas veniam, molestias
        itaque sed quos dolorem aperiam sint quisquam neque consequatur vero
        dolorum!
      </Text>
      <Text>Lorem ipsum dolor sit.</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium
        nulla necessitatibus quasi odio sunt?
      </Text>
      <Accept tarRedirect="Login" />
    </View>
  );
};
export default HomeLoading;
