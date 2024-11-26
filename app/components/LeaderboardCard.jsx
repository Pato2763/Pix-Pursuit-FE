import { View, Text, StyleSheet } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";
import { useState, useEffect } from "react";
import Colours from "../utils/Colours";

const LeaderboardCard = ({ user, position }) => {
  const [cardStyle, setCardStyle] = useState({});
  const placement = {
    0: "1st",
    1: "2nd",
    2: "3rd",
  };
  useEffect(() => {
    if (user.user_id) {
      setCardStyle(leaderboard.leaderboardCard);
    } else {
      setCardStyle(leaderboard.miniLeaderboardCard);
    }
  }, [user]);

  return (
    <View style={miniLB.cardStyle}>
      <Text
        style={[
          position === 0
            ? miniLB.first
            : position === 1
            ? miniLB.second
            : miniLB.third,
        ]}
      >
        {user.username}
      </Text>
      <Text style={miniLB.points}>{placement[position]}</Text>
    </View>
  );
};

export default LeaderboardCard;

const miniLB = StyleSheet.create({
  first: {
    textAlign: "center",
    fontSize: 30,
    color: "gold",
    marginVertical: 10,
  },
  second: {
    textAlign: "center",
    fontSize: 25,
    margin: "auto",
    color: "silver",
    marginVertical: 10,
  },
  third: {
    textAlign: "center",
    fontSize: 20,
    margin: "auto",
    color: "brown",
    marginVertical: 10,
  },
  points: {
    color: Colours.AQUA_BLUE,
    fontSize: 20,
    marginLeft: 17,
    marginTop: 10,
    justifyContent: "flex-end",
  },
  cardStyle: {
    width: 240,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
});
