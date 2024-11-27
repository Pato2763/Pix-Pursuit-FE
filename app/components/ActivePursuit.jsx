import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { MapViewer } from "./MapViewer";
import ToggleImage from "./ToggleImage";
import ConfirmLocation from "./buttons/Confirmlocation";
import ChangePursuit from "./buttons/ChangePursuit";
import Timer from "./Timer";
import Colours from "../utils/Colours";
import { UserContext } from "../context/UserContext";

const ActivePursuit = ({ imageLoading, imageData }) => {
  const [showingMap, setShowingMap] = useState(true);
  const [pursuitImage, setPursuitImage] = useState(null);

  const { user } = useContext(UserContext);

  return (
    <View style={Styles.CurrentPursuitContainer}>
      <Text style={Styles.title}>{user.currentPursuit.title}</Text>
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
      <Timer
        pursuit_id={user.currentPursuit.pursuit_id}
        createdAt={user.currentPursuit.created_at}
        type={"selected"}
      />
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
    flex: 1,
    gap: 20,
    width: "80%",
    borderRadius: 10,
    padding: 5,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: Colours.AQUA_BLUE,
    marginHorizontal: "auto",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
