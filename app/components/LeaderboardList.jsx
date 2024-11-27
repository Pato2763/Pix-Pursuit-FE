import { useState, useEffect } from "react";
import { getUsers } from "../api";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import Loading from "./Loading";
import { BigLeaderboardCard, BigLeaderboard } from "./BigLeaderboardCard";

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
        style={BigLeaderboard.header}
      />
      <View style={BigLeaderboard.leaderboardListContainer}>
        <ScrollView>
          {loading ? (
            <Loading />
          ) : (
            users.map((user) => {
              return <BigLeaderboardCard key={user.user_id} user={user} />;
            })
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default LeaderbaordList;
