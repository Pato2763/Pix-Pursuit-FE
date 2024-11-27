import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../context/UserContext";
import { Styles } from "../utils/styles/login";
import { blueButton } from "../utils/styles/buttons";
import { useContext } from "react";
import { StyleSheet } from "react-native";

const ConfirmLogout = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  const onPressConfirm = () => {
    setUser({});
    navigation.navigate("Login");
  };

  const onPressCancel = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={Styles.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
      <SafeAreaView style={logOutStyles.outestContainer}>
        <View style={logOutStyles.container}>
          <Text>Are You sure you want to log out?</Text>
          <Pressable onPress={onPressCancel} style={logOutStyles.cancel}>
            <Text>Cancel</Text>
          </Pressable>
          <Pressable onPress={onPressConfirm} style={blueButton.Accpet}>
            <Text>Log Out</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const logOutStyles = StyleSheet.create({
  outestContainer: {
    flex: 1,
    justifyContent: "center",
    margin: "auto",
    marginVertical: "auto",
  },
  container: {
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
    width: "auto",
    height: "auto",
    paddingVertical: 5,
    padding: 30,
    paddingVertical: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "black",
  },
  cancel: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 150,
    elevation: 3,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
  },
});

export default ConfirmLogout;
