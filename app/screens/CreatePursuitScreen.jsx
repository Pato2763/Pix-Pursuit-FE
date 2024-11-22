import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Colours from "../utils/Colours";
import {
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import SelectDifficulty from "../components/SelectDifficulty";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { PhotoContext } from "../context/Photo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const CreatePursuit = () => {
  const navigation = useNavigation();
  const { photo, setPhoto } = useContext(PhotoContext);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View>
              <Text style={Styles.introText}>
                Here you can create a new pursuit for others to take part in!
                Find a cool location to take a picture, give it a an interesting
                name and description and sit back and watch as other hunters
                compete to finish your pursuit as fast as possible!
              </Text>
              <View style={Styles.container}>
                <View style={Styles.picContainer}>
                  <Text style={Styles.picInputText}>
                    Upload a Pursuit picture
                  </Text>
                  <TouchableHighlight
                    onPress={() => {
                      setPhoto(null);
                      navigation.navigate("Camera");
                    }}
                  >
                    <Image
                      style={Styles.camLogo}
                      source={require("../../assets/camera-icon.png")}
                    />
                  </TouchableHighlight>
                </View>
                {photo ? (
                  <View>
                    <Image
                      style={Styles.imagePreview}
                      source={{ uri: `data:image/jpeg;base64,${photo.base64}` }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setPhoto(null);
                      }}
                    >
                      <Text style={Styles.removeImageText}>
                        Remove this image
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
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
                  <Text style={{ fontWeight: "bold" }}>
                    Create your pursuit!
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setPhoto(null);
                  navigation.goBack();
                }}
              >
                <Text style={Styles.goBack}>Go back</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
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
  imagePreview: {
    marginHorizontal: "auto",
    height: 140,
    width: 140,
    resizeMode: "cover",
    borderRadius: 10 / 1,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colours.AQUA_BLUE,
  },
  removeImageText: {
    color: "red",
    marginVertical: 15,
    marginHorizontal: "auto",
    textDecorationLine: "underline",
  },
});
