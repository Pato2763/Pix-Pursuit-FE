import { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { Styles } from "../utils/styles/login";
import { blueButton } from "../utils/styles/buttons";

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();

  const onPress = () => {
    setUser({});
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={Styles.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
      <SafeAreaView>
        <View>
          <Pressable onPress={onPress}>
            <Text style={blueButton.Accpet}>Log Out</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProfileScreen;
