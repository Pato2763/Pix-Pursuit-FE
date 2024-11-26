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
  cardStyle: {
    margin: 10,
    width: 325,
    backgroundColor: Colours.GREY,
    borderRadius: 150,
    shadowColor: Colours.AQUA_BLUE,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  //actual background
  leaderboardListContainer: {
    alignItems: "center",
    borderRadius: 3,
    width: 350,
    gap: 100,
    position: "centre",
  },
  leaderboardCard: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingTop: 5,
    borderWidth: 1,
    borderColor: Colours.GREY,
    borderBottomColor: "#c0e3e0",
    paddingBottom: 100,
  },
  cardTextPoints: {
    color: Colours.AQUA_BLUE,
    fontSize: 18,
    justifyContent: "space-between",
    margin: 5,
    fontWeight: "bold",
  },
  cardTextUser: {
    color: Colours.AQUA_BLUE,
    fontSize: 20,
    justifyContent: "space-between",
    margin: 5,
    fontWeight: "bold",
  },
  miniLeaderboardCard: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    borderWidth: 1,
    borderBottomColor: "#c0e3e0",
    borderColor: Colours.PURPLEBLUE,
  },
});
