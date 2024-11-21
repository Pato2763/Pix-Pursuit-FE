import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import Colours from "../utils/Colours";
import { TouchableOpacity } from "react-native";
import SelectDifficulty from "../components/SelectDifficulty";
import { useNavigation } from "@react-navigation/native";

const CreatePursuit = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text style={Styles.introText}>
          Here you can create a new pursuit for others to take part in! Find a
          cool location to take a picture, give it a an interesting name and
          description and sit back and watch as other hunters compete to finish
          your pursuit as fast as possible!
        </Text>
        <View style={Styles.container}>
          <View style={Styles.picContainer}>
            <Text style={Styles.picInputText}>Upload a Pursuit picture</Text>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Camera");
              }}
            >
              <Image
                style={Styles.camLogo}
                source={require("../../assets/camera-icon.png")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <View style={Styles.formContainer}>
              <Text style={Styles.labelText}>Title:</Text>
              <TextInput
                style={Styles.formInputText}
                placeholder="Enter a pursuit title"
              ></TextInput>
              <Text style={Styles.labelText}>Description:</Text>
              <TextInput
                style={Styles.formInputText}
                placeholder="Enter a pursuit description"
              ></TextInput>
              <View style={Styles.difficultyContainer}>
                <Text style={[Styles.labelText, { paddingTop: 15 }]}>
                  Select a difficulty:
                </Text>
                <SelectDifficulty />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={Styles.createBtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Create your pursuit!</Text>
          </TouchableOpacity>
        </View>

        <Text style={Styles.goBack}>Go back</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePursuit;

const Styles = StyleSheet.create({
  introText: {
    marginVertical: 40,
    width: 300,
    marginHorizontal: "auto",
    textAlign: "center",
  },
  container: {
    gap: 20,
    width: "90%",
    borderRadius: 10,
    padding: 8,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    marginHorizontal: "auto",
  },
  picInputText: {
    fontWeight: "bold",
    justifyContent: "center",
    padding: 20,
  },
  camLogo: {
    height: 60,
    width: 60,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colours.AQUA_BLUE,
  },
  picContainer: {
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
    height: 80,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    borderRadius: 8,
  },
  formContainer: {
    gap: 10,
  },
  formInputText: {
    padding: 15,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colours.LIGHTGREY,
    color: "white",
    borderColor: "#D9D9D9",
    borderWidth: 2,
    color: "black",
  },
  difficultyContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
  labelText: {
    fontWeight: "bold",
  },
  createBtn: {
    marginVertical: 10,
    width: "60%",
    backgroundColor: Colours.AQUA_BLUE,
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  goBack: {
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
