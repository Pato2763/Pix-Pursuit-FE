import { StyleSheet, Dimensions } from "react-native";
import Colours from "../Colours";
const { width, height } = Dimensions.get("window");

export const leaderboard = StyleSheet.create({
  leaderboardPageContainer: {
    alignItems: "center",
  },
  header: {
    width: width * 0.8,
    height: height * 0.08,
    resizeMode: "contain",
  },
  leaderboardListContainer: {
    alignItems: "center",
    paddingLeft: 10,
    borderRadius: 10,
    width: "80%",
    backgroundColor: Colours.PURPLEBLUE,
    gap: 2,
  },
  leaderboardCard: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingTop: 10,
    borderWidth: 1,
    borderColor: Colours.PURPLEBLUE,
    borderBottomColor: "#c0e3e0",
    paddingBottom: 4,
  },
  cardText: {
    color: Colours.AQUA_BLUE,
    fontSize: 20,
  },
});
