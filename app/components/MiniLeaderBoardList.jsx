import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, StyleSheet } from "react-native";
import LeaderboardCard from "./LeaderboardCard";
import { leaderboard } from "../utils/styles/leaderboard";
import { getPursuitCompletedByUsers } from "../api";

const MiniLeaderBoardList = () => {
  const { user } = useContext(UserContext);
  const [miniLeaderBoardUsers, setMiniLeaderboardUsers] = useState([]);
  useEffect(() => {
    getPursuitCompletedByUsers(user.hosted_pursuit_id).then(
      (fetchedMiniLeaderBoardUsers) => {
        setMiniLeaderboardUsers(fetchedMiniLeaderBoardUsers);
      }
    );
  }, [user.hosted_pursuit_id]);

  return (
    <View style={leaderboard.container}>
      <Text style={leaderboard.textTitle}>Your hosted Pursuit</Text>
      <Text style={leaderboard.text}>
        Here is your personal leaderboard for your hosted pursuit:
      </Text>
      {!miniLeaderBoardUsers.length ? (
        <Text>No users have completed this pursuit yet</Text>
      ) : (
        <View style={leaderboard.leaderboardListContainer}>
          {miniLeaderBoardUsers.map((user) => {
            return <LeaderboardCard key={user.username} user={user} />;
          })}
        </View>
      )}
    </View>
  );
};

export default MiniLeaderBoardList;
