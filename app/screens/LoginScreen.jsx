import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
} from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Styles } from "../utils/styles/login";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../api";
import { TouchableWithoutFeedback, ActivityIndicator } from "react-native";
import { UserContext } from "../context/UserContext";

const LoginScreen = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const refPasswordInput = useRef(null);
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleInputChange = (key, value) => {
    setLoginInfo((prevState) => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {}, [loginInfo]);

  const focusOnPassword = () => {
    refPasswordInput?.current?.focus();
  };

  const submitLogin = () => {
    setLoading(true);
    loginUser(loginInfo)
      .then((newUser) => {
        setUser(newUser);
        setError(false);
        setLoading(false);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={Styles.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>Welcome to Pix Pursuit!</Text>
          <View style={Styles.signUpContainer}>
            <Text>Username:</Text>
            <TextInput
              style={Styles.inputText}
              placeholder="Enter your username"
              returnKeyType="next"
              value={loginInfo.username}
              onSubmitEditing={focusOnPassword}
              onChangeText={(text) => handleInputChange("username", text)}
            />

            <Text>Password:</Text>
            <TextInput
              ref={refPasswordInput}
              style={Styles.inputText}
              placeholder="Enter your password"
              secureTextEntry={true}
              returnKeyType="done"
              value={loginInfo.password}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <TouchableOpacity>
              <Text style={{ textDecorationLine: "underline" }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginBtn} onPress={submitLogin}>
              {/* <TouchableOpacity
              style={Styles.loginBtn}
              onPress={() => {
                navigation.navigate("Home");
              }}
             > to skip log in*/}
              {loading ? <ActivityIndicator /> : <Text>Log In</Text>}
            </TouchableOpacity>
            {error && <Text style={Styles.errorMsg}>Error logging you in</Text>}
            <Text style={{ textAlign: "center", marginVertical: 10 }}>
              Not a member?
            </Text>
            <TouchableOpacity
              style={Styles.signupBtn}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
