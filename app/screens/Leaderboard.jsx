import { View, Image, ScrollView } from "react-native";
import LeaderbaordList from "../components/LeaderboardList";
import { leaderboard } from "../utils/styles/leaderboard";

const Leaderboard = () => {
  return (
    <View style={leaderboard.leaderboardPageContainer}>
      <LeaderbaordList />
    </View>
  );
};

export default Leaderboard;
