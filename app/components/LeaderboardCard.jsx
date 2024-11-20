import { View, Text } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";

const LeaderboardCard = (user) => {
  return (
    <View style={leaderboard.leaderboardCard}>
      <Text style={leaderboard.cardText}>{user.user.username}</Text>
      <Text style={leaderboard.cardText}>{user.user.points}</Text>
    </View>
  );
};

export default LeaderboardCard;
