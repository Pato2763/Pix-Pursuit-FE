import { StyleSheet, Dimensions } from "react-native";
import Colours from "../Colours";
const { width, height } = Dimensions.get("window");

export const choosePursuits = StyleSheet.create({
  choosePursuitsPageContainer: {
    alignItems: "center",
  },
  header: {
    width: width * 0.8,
    height: height * 0.08,
    resizeMode: "contain",
  },
  pursuitsListContainer: {
    alignItems: "center",
    borderRadius: 12,
    width: 350,
    backgroundColor: Colours.PURPLEBLUE,
    gap: 10,
    padding: 10,
  },
  pursuitdCard: {
    width: 330,
    height: 120,
    justifyContent: "space-evenly",
    borderWidth: 2,
    borderRadius: 11,
    borderColor: Colours.AQUA_BLUE,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  buttons: {
    flexDirection: "row",
    gap: 25,
  },
  titleText: {
    margin: "auto",
    marginVertical: 20,
    textAlign: "center",
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 25,
  },
  previewImage: {
    height: 300,
    width: 250,
    margin: "auto",
  },
  imageLoadingContainer: {
    height: 300,
    width: 250,
    gap: 10,
    color: Colours.AQUA_BLUE,
  },
  imagePreviewText: {
    textAlign: "center",
    marginBottom: 10,
  },
  easy: {
    color: "green",
    borderColor: "green",
  },
  medium: {
    color: "yellow",
    borderColor: "yellow",
  },
  hard: {
    color: "red",
    borderColor: "red",
  },
  topDiv: {
    flexDirection: "row",
    width: 280,
    gap: 15,
    justifyContent: "flex-end",
  },
  title: {
    color: Colours.AQUA_BLUE,
    marginVertical: 10,
    fontSize: 25,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  difficulty: {
    textAlign: "center",
    width: 100,
    margin: "auto",
    marginLeft: 15,
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 15,
  },
  cardText: {
    color: Colours.AQUA_BLUE,
    fontSize: 17,
    textAlign: "center",
  },
});
