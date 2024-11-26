import { useState, useEffect } from "react";
import { getUsers } from "../api";
import LeaderboardCard from "./LeaderboardCard";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import { leaderboard } from "../utils/styles/leaderboard";
import Loading from "./Loading";

const LeaderbaordList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/Pursuit-Leader-boards.png")}
        style={leaderboard.header}
      />
      <View style={leaderboard.leaderboardListContainer}>
        <ScrollView>
          {loading ? (
            <Loading />
          ) : (
            users.map((user) => {
              return <LeaderboardCard key={user.user_id} user={user} />;
            })
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default LeaderbaordList;
