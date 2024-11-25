import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { MapViewer } from "./MapViewer";
import ToggleImage from "./ToggleImage";
import ConfirmLocation from "./buttons/Confirmlocation";
import ChangePursuit from "./buttons/ChangePursuit";

const CurrentPursuit = () => {
  const [showingMap, setShowingMap] = useState(true);
  const [pursuitImage, setPursuitImage] = useState(null);

  return (
    <View style={Styles.CurrentPursuitContainer}>
      <ToggleImage
        setShowingMap={setShowingMap}
        showingMap={showingMap}
        pursuitImage={pursuitImage}
      />
      {showingMap ? (
        <MapViewer setPursuitImage={setPursuitImage} />
      ) : (
        <Image
          style={Styles.pursuitImage}
          source={{
            uri: pursuitImage,
          }}
        />
      )}

      <View style={Styles.ButtonContainer}>
        <ChangePursuit />
        <ConfirmLocation />
      </View>
    </View>
  );
};

export default CurrentPursuit;

const Styles = StyleSheet.create({
  CurrentPursuitContainer: {
    height: 500,
    width: 400,
    marginTop: 20,
    margin: "auto",
    marginBottom: "20",
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
});
