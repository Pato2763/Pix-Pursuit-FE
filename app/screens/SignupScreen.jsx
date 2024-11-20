import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import { Styles } from "../utils/styles/signup";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";

const SignupScreen = () => {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [retypedPW, setRetypedPW] = useState("");
  const refEmailInput = useRef(null);
  const refPasswordInput = useRef(null);
  const refRePasswordInput = useRef(null);
  const navigation = useNavigation();

  const handleInputChange = (key, value) => {
    setSignupInfo((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={Styles.container}
          keyboardShouldPersistTaps="handled"
          style={Styles.ScrollView}
        >
          <Text style={Styles.welcome}>Create your account</Text>

          <View style={Styles.signUpContainer}>
            <Text>Username:</Text>
            <TextInput
              style={Styles.inputText}
              placeholder="Enter your username"
              returnKeyType="next"
              value={signupInfo.username}
              onSubmitEditing={() => refEmailInput.current.focus()}
              onChangeText={(text) => handleInputChange("username", text)}
            />

            <Text>E-mail:</Text>
            <TextInput
              ref={refEmailInput}
              style={Styles.inputText}
              placeholder="Enter your e-mail"
              returnKeyType="next"
              value={signupInfo.email}
              onSubmitEditing={() => refPasswordInput.current.focus()}
              onChangeText={(text) => handleInputChange("email", text)}
            />

            <Text>Password:</Text>
            <TextInput
              ref={refPasswordInput}
              style={Styles.inputText}
              placeholder="Enter your password"
              returnKeyType="next"
              secureTextEntry={true}
              value={signupInfo.password}
              onSubmitEditing={() => refRePasswordInput.current.focus()}
              onChangeText={(text) => handleInputChange("password", text)}
            />

            <Text>Re-type password:</Text>
            <TextInput
              ref={refRePasswordInput}
              style={Styles.inputText}
              placeholder="Re-type your password"
              returnKeyType="done"
              secureTextEntry={true}
              value={retypedPW}
              onChangeText={(text) => setRetypedPW(text)}
            />

            <TouchableOpacity
              style={Styles.createBtn}
              onPress={() => {
                console.log(signupInfo);
              }}
            >
              <Text>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Styles.cancelBtn}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
