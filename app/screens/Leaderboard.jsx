import { View, Text, Image, ScrollView } from "react-native";
import LeaderbaordList from "../components/LeaderboardList";
import { leaderboard } from "../utils/styles/leaderboard";

const Leaderboard = () => {
  return (
    <ScrollView>
      <View style={leaderboard.leaderboardPageContainer}>
        <Image
          source={require("../../assets/Pursuit-Leader-boards.png")}
          style={leaderboard.header}
        />
        <LeaderbaordList />
      </View>
    </ScrollView>
  );
};

export default Leaderboard;
