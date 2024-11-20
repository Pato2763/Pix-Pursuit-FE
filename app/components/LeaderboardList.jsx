import { useState, useEffect } from "react";
import { getUsers } from "../api";
import LeaderboardCard from "./LeaderboardCard";
import { View } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";

const LeaderbaordList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
    });
  }, []);

  return (
    <View style={leaderboard.leaderboardListContainer}>
      {users.map((user) => {
        return <LeaderboardCard key={user.user_id} user={user} />;
      })}
    </View>
  );
};
export default LeaderbaordList;
