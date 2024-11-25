import { StyleSheet, Dimensions } from "react-native";
import Colours from "../Colours";
const { width, height } = Dimensions.get("window");

export const choosePursuits = StyleSheet.create({
  choosePursuitsPageContainer: {
    alignItems: "center",
  },
  header: {},
  pursuitsListContainer: {
    alignItems: "center",
    padding: 1,
    borderRadius: 15,
    width: "100%",
    backgroundColor: Colours.PURPLEBLUE,
    gap: 0,
  },
  pursuitdCard: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    width: width * 0.8,
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colours.PURPLEBLUE,
    borderBottomColor: "#c0e3e0",
  },
  cardText: {
    color: Colours.AQUA_BLUE,
    fontSize: 25,
    textAlign: "center",
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
});
