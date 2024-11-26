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
    width: "90%",
    backgroundColor: Colours.PURPLEBLUE,
    gap: 2,
    margin: "auto",
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
  miniLeaderboardCard: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    borderWidth: 1,
    borderBottomColor: "#c0e3e0",
    borderColor: Colours.PURPLEBLUE,
  },
  container: {
    marginVertical: 20,
    width: 350,
    backgroundColor: "rgba(300, 300, 300, 0.8)",
    padding: 20,
    margin: "auto",
    borderRadius: 10,
    borderColor: "#D9D9D9",
    borderWidth: 2,
  },
  text: {
    marginBottom: 10,
    textAlign: "center",
  },
  textTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
