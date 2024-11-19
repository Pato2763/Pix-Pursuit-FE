import { StyleSheet } from "react-native";
import Colours from "../Colours";

export const blueButton = StyleSheet.create({
  Accpet: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 150,
    elevation: 3,
    backgroundColor: Colours.AQUA_BLUE,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
