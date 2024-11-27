import { View, Image, ScrollView } from "react-native";
import LeaderbaordList from "../components/LeaderboardList";
import { BigLeaderboard } from "../components/BigLeaderboardCard";

const Leaderboard = () => {
  return (
    <View style={BigLeaderboard.leaderboardPageContainer}>
      <LeaderbaordList />
    </View>
  );
};

export default Leaderboard;
