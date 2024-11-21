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
    paddingLeft: 1,
    borderRadius: 10,
    width: "100%",
    backgroundColor: Colours.PURPLEBLUE,
    gap: 10,
  },
  pursuitdCard: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 20,
    borderWidth: 1,
    borderColor: Colours.PURPLEBLUE,
    borderBottomColor: "#c0e3e0",
    paddingBottom: 5,
  },
  cardText: {
    color: Colours.AQUA_BLUE,
    fontSize: 30,
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
