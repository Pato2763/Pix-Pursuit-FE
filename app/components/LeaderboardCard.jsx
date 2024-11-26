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
    <View style={leaderboard.cardStyle}>
      <Text style={leaderboard.cardTextUser}>User Name: {user.username}</Text>
      <Text style={leaderboard.cardTextPoints}>
        Total Amount of Points: {user.points}
      </Text>
    </View>
  );
};

export default LeaderboardCard;
