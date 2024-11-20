import { View, Text, Button, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { Styles } from "../utils/styles/login";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const refPasswordInput = useRef(null);
  const navigation = useNavigation();

  const focusOnPassword = () => {
    if (refPasswordInput && refPasswordInput.current) {
      refPasswordInput.current.focus();
    }
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Styles.container}>
        <Text style={Styles.welcome}>Welcome to Pix Pursuit!</Text>
        <View style={Styles.signUpContainer}>
          <Text>Username:</Text>
          <TextInput
            style={Styles.inputText}
            returnKeyType="next"
            onSubmitEditing={focusOnPassword}
            onChangeText={(text) =>
              setLoginInfo({ ...loginInfo, username: text })
            }
          ></TextInput>

          <Text>Password:</Text>
          <TextInput
            ref={refPasswordInput}
            returnKeyType="done"
            onSubmitEditing={hideKeyboard}
            secureTextEntry={true}
            style={Styles.inputText}
            onChangeText={(text) => {
              setLoginInfo({ ...loginInfo, password: text });
              console.log(loginInfo);
            }}
          ></TextInput>
          <TouchableOpacity>
            <Text style={{ textDecorationLine: "underline" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.loginBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text>Log In</Text>
          </TouchableOpacity>
          <Text
            style={{
              width: "%100",
              marginHorizontal: "auto",
            }}
          >
            Not a member?
          </Text>
          <TouchableOpacity style={Styles.signupBtn}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
