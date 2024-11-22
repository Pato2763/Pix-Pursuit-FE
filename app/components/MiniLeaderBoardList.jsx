import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text } from "react-native";
import LeaderboardCard from "./LeaderboardCard";
import { leaderboard } from "../utils/styles/leaderboard";
import { getPursuitCompletedByUsers } from "../api";

const MiniLeaderBoardList = () => {
  const { user } = useContext(UserContext);
  const [miniLeaderBoardUsers, setMiniLeaderboardUsers] = useState([]);
  //user.hostedPursuitID might change dependent on kyles backend changes
  useEffect(() => {
    getPursuitCompletedByUsers(user.hosted_pursuit_id).then(
      (fetchedMiniLeaderBoardUsers) => {
        setMiniLeaderboardUsers(fetchedMiniLeaderBoardUsers);
      }
    );
  }, []);

  if (!miniLeaderBoardUsers.length) {
    return <Text>No users have completed this pursuit yet</Text>;
  } else {
    return (
      <View style={leaderboard.leaderboardListContainer}>
        {miniLeaderBoardUsers.map((user) => {
          return <LeaderboardCard key={user.username} user={user} />;
        })}
      </View>
    );
  }
};

export default MiniLeaderBoardList;
