import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { MapViewer } from "./MapViewer";
import ToggleImage from "./ToggleImage";
import ConfirmLocation from "./buttons/Confirmlocation";
import ChangePursuit from "./buttons/ChangePursuit";
import { getPursuitImage } from "../api";
import { UserContext } from "../context/UserContext";
import { NoActivePursuitHome } from "./NoActivePursuitHome";

const CurrentPursuit = () => {
  const [showingMap, setShowingMap] = useState(true);
  const [pursuitImage, setPursuitImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user.pursuit_id);
    setImageLoading(true);
    getPursuitImage(user.pursuit_id)
      .then((res) => {
        setImageData(res);
        setImageLoading(false);
      })
      .catch((err) => {
        setImageData(null);
        setImageLoading(false);
        console.log(err);
      });
  }, [user.pursuit_id]);

  return (
    <View>
      {user.pursuit_id ? (
        <View style={Styles.CurrentPursuitContainer}>
          <Text style={Styles.title}>Your chosen Pursuit</Text>
          <ToggleImage setShowingMap={setShowingMap} showingMap={showingMap} />
          {showingMap ? (
            <MapViewer setPursuitImage={setPursuitImage} />
          ) : imageLoading ? (
            <ActivityIndicator />
          ) : (
            <Image
              style={Styles.pursuitImage}
              source={{
                uri: imageData,
              }}
            />
          )}

          <View style={Styles.ButtonContainer}>
            <ChangePursuit />
            <ConfirmLocation />
          </View>
        </View>
      ) : (
        <NoActivePursuitHome />
      )}
    </View>
  );
};

export default CurrentPursuit;

const Styles = StyleSheet.create({
  CurrentPursuitContainer: {
    height: 550,
    width: 350,
    marginTop: 20,
    margin: "auto",
    marginBottom: "20",
    borderRadius: 10,
    paddingVertical: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    backgroundColor: "rgba(300, 300, 300, 0.8)",
  },
  ButtonContainer: {
    flexDirection: "row",
    margin: "auto",
    marginTop: "10",
    gap: 10,
  },
  pursuitImage: {
    height: 400,
    width: 300,
    margin: "auto",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
