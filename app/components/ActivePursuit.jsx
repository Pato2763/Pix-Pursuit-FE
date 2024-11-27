import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { MapViewer } from "./MapViewer";
import ToggleImage from "./ToggleImage";
import ConfirmLocation from "./buttons/Confirmlocation";
import ChangePursuit from "./buttons/ChangePursuit";
import Timer from "./Timer";

const ActivePursuit = ({
  setIsActivePursuit,
  imageLoading,
  setImageLoading,
  imageData,
}) => {
  const [pursuitTitle, setPursuitTitle] = useState("");
  const [showingMap, setShowingMap] = useState(true);
  const [pursuitImage, setPursuitImage] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);

  return (
    <View style={Styles.CurrentPursuitContainer}>
      <Text style={Styles.title}>{pursuitTitle}</Text>
      <ToggleImage setShowingMap={setShowingMap} showingMap={showingMap} />
      {showingMap ? (
        <MapViewer
          setPursuitImage={setPursuitImage}
          setCreatedAt={setCreatedAt}
          setPursuitTitle={setPursuitTitle}
          setIsActivePursuit={setIsActivePursuit}
        />
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
      <Timer createdAt={createdAt} type={"selected"} />
      <View style={Styles.ButtonContainer}>
        <ChangePursuit />
        <ConfirmLocation />
      </View>
    </View>
  );
};

export default ActivePursuit;

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
    height: 350,
    width: 300,
    margin: "auto",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
