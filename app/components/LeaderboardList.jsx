import { useState, useEffect } from "react";
import { getUsers } from "../api";
import LeaderboardCard from "./LeaderboardCard";
import { View } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";
import Loading from "./Loading";

const LeaderbaordList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setLoading(true);
    });
  }, []);

  return (
    <View style={leaderboard.leaderboardListContainer}>
      {loading ? (
        <Loading />
      ) : (
        users.map((user) => {
          return <LeaderboardCard key={user.user_id} user={user} />;
        })
      )}
    </View>
  );
};
export default LeaderbaordList;
