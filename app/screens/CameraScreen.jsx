import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colours from "../utils/Colours";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { PhotoContext } from "../context/Photo";

const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef();
  const navigation = useNavigation();
  const { photo, setPhoto } = useContext(PhotoContext);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePic = async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, exif: false };
      const takenPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takenPhoto);
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <SafeAreaView style={styles.previewContainer}>
          <Image
            style={styles.imagePreview}
            source={{ uri: `data:image/jpeg;base64,${photo.base64}` }}
          />
          <View style={styles.retakeButtonContainer}>
            <TouchableOpacity
              style={styles.retakeBtn}
              onPress={() => setPhoto(null)}
            >
              <Text style={styles.text}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.retakeBtn}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.text}>Use photo</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <CameraView ref={cameraRef} style={styles.camera}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
                setPhoto(null);
              }}
              style={styles.button}
            >
              <Text style={styles.returnText}>Return</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={takePic} style={styles.button}>
              <Text style={styles.text}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  message: {
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    top: 600,
  },
  button: {
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  previewContainer: {
    alignItems: "center",
    gap: 20,
  },
  imagePreview: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    borderRadius: 150 / 3,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colours.AQUA_BLUE,
  },
  retakeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
    height: 100,
  },
  retakeBtn: {
    width: "40%",
    backgroundColor: Colours.AQUA_BLUE,
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  returnText: {
    color: "red",
  },
});
