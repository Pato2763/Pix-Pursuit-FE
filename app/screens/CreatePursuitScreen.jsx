import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import Colours from "../utils/Colours";
import SelectDifficulty from "../components/SelectDifficulty";
import { useNavigation } from "@react-navigation/native";
import { PhotoContext } from "../context/Photo";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AWS from "aws-sdk";
import calcRadius from "../utils/calcRadius";
import { getLocation } from "../utils/loaction";
import { postPursuit } from "../api";
import { UserContext } from "../context/UserContext";

const CreatePursuit = () => {
  const navigation = useNavigation();
  const { photo, setPhoto } = useContext(PhotoContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [pursuitData, setPursuitData] = useState({
    host_ID: user.user_ID,
    title: "",
    image: "",
    difficulty: null,
    active: true,
  });
  const [error, setError] = useState(null);
  const titleInputRef = useRef(null);

  const s3 = new AWS.S3();

  AWS.config.update({
    accessKeyId: process.env.EXPO_PUBLIC_KEY,
    secretAccessKey: process.env.EXPO_PUBLIC_ACCESS_SECRET,
    region: process.env.EXPO_PUBLIC_REGION,
  });

  const uploadFileToS3 = (bucketName, fileName, filePath) => {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: filePath,
    };

    return s3.upload(params).promise();
  };

  const final = async () => {
    if (pursuitData.difficulty === null || pursuitData.title.length === 0) {
      return setError("Please fill in all information to post a pursuit");
    }

    const bucketName = "pix-pursuit";
    const filePath = photo.uri.replace("file://", "");
    const fileName = `${Math.random() * 100000}`;

    try {
      const currLocation = await getLocation();
      const newLocation = {
        latitude: currLocation.coords.latitude,
        longitude: currLocation.coords.longitude,
      };
      const radiusCoords = calcRadius(newLocation, pursuitData.difficulty);
      console.log(pursuitData, newLocation, radiusCoords, fileName);
      const posted = await postPursuit(
        pursuitData,
        newLocation,
        radiusCoords,
        fileName
      );
      setPursuitData({
        host_ID: 1,
        title: "",
        image: "",
        difficulty: null,
        active: true,
      });
      setPhoto(null);

      const fileData = await fetch(filePath).then((response) =>
        response.blob()
      );
      await uploadFileToS3(bucketName, fileName, fileData);

      console.log("file uploaded:", fileName);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error uploading your pursuit");
      console.log(error);
    }
  };

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
                      source={{
                        uri: `data:image/jpeg;base64,${photo.base64}`,
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setError(null);
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
                      ref={titleInputRef}
                      style={Styles.formInputText}
                      placeholder="Enter a pursuit title"
                      value={pursuitData.title}
                      onChangeText={(text) =>
                        setPursuitData((prev) => {
                          return {
                            ...prev,
                            title: text,
                          };
                        })
                      }
                    ></TextInput>

                    <View style={Styles.difficultyContainer}>
                      <Text style={[Styles.labelText, { paddingTop: 15 }]}>
                        Select a difficulty:
                      </Text>
                      <SelectDifficulty setPursuitData={setPursuitData} />
                    </View>
                  </View>
                </View>
                <View>
                  {error ? <Text style={Styles.errorMsg}>{error}</Text> : null}
                </View>
                <TouchableOpacity
                  disabled={!photo}
                  style={[
                    Styles.createBtn,
                    !photo ? { backgroundColor: "gray" } : null,
                  ]}
                  onPress={() => {
                    setError(false);
                    setLoading(true);
                    final();
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
  errorMsg: {
    color: "red",
    marginHorizontal: "auto",
  },
});
