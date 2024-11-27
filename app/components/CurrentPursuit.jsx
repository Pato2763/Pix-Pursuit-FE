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
import Timer from "./Timer";
import Colours from "../utils/Colours";
import ActivePursuit from "./ActivePursuit";
import InactivePursuit from "./InactivePursuit";


const CurrentPursuit = () => {
  const [imageData, setImageData] = useState(null);
  const [isActivePursuit, setIsActivePursuit] = useState(true);
  const [imageLoading, setImageLoading] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setImageLoading(true);
    getPursuitImage(user.pursuit_id)
      .then((res) => {
        setImageData(res);
        setImageLoading(false);
      })
      .catch((err) => {
        setImageData(null);
        setImageLoading(false);
      });
  }, [user.pursuit_id]);

  return (
    <View>
      {!user.pursuit_id ? (
        <NoActivePursuitHome />
      ) : isActivePursuit ? (
        <ActivePursuit
          setIsActivePursuit={setIsActivePursuit}
          setImageLoading={setImageLoading}
          imageLoading={imageLoading}
          imageData={imageData}
        />
      ) : (
        <InactivePursuit />
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
