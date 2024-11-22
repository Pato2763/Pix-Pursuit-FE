import { View, Text } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";
import { useState, useEffect } from "react";

const LeaderboardCard = ({ user }) => {
  const [cardStyle, setCardStyle] = useState({});
  useEffect(() => {
    if (user.user_id) {
      setCardStyle(leaderboard.leaderboardCard);
    } else {
      setCardStyle(leaderboard.miniLeaderboardCard);
    }
  }, [user]);

  return (
    <View style={cardStyle}>
      <Text style={leaderboard.cardText}>{user.username}</Text>
      <Text style={leaderboard.cardText}>{user.points}</Text>
    </View>
  );
};

export default LeaderboardCard;
