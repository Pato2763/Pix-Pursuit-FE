import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { View, Text, StyleSheet } from "react-native";
import LeaderboardCard from "./LeaderboardCard";
import { leaderboard } from "../utils/styles/leaderboard";
import { getPursuitbyPursuitID, getPursuitCompletedByUsers } from "../api";
import Colours from "../utils/Colours";
import Timer from "./Timer";
import CreatePursuit from "./buttons/CreatePursuit";

const MiniLeaderBoardList = () => {
  const { user } = useContext(UserContext);
  const [miniLeaderBoardUsers, setMiniLeaderboardUsers] = useState([]);
  const [hostedTimeRemaining, setHostedTimeRemaining] = useState(null);
  useEffect(() => {
    getPursuitCompletedByUsers(user.hosted_pursuit_id).then(
      (fetchedMiniLeaderBoardUsers) => {
        setMiniLeaderboardUsers(fetchedMiniLeaderBoardUsers);
      }
    );
    getPursuitbyPursuitID(user.hosted_pursuit_id).then((res) => {
      setHostedTimeRemaining(res.created_at);
    });
  }, [user.hosted_pursuit_id]);
  return (
    <View style={leaderboard.container}>
      <Text style={leaderboard.textTitle}>Your hosted Pursuit</Text>
      <Text style={leaderboard.text}>
        Here is your personal leaderboard for your hosted pursuit:
      </Text>
      {!miniLeaderBoardUsers.length ? (
        <View style={Styles.NoCompletionsContainer}>
          <Text style={Styles.NoCompletionsMsg}>
            No users have completed this pursuit yet
          </Text>
        </View>
      ) : (
        <View style={Styles.leaderboardListContainer}>
          {miniLeaderBoardUsers.map((user, index) => {
            return (
              <LeaderboardCard
                key={user.username}
                position={index}
                user={user}
              />
            );
          })}
        </View>
      )}
      <Timer createdAt={hostedTimeRemaining} />
    </View>
  );
};

export default MiniLeaderBoardList;

const Styles = StyleSheet.create({
  leaderboardListContainer: {
    alignItems: "center",
    paddingLeft: 10,
    borderRadius: 10,
    width: "90%",
    backgroundColor: Colours.PURPLEBLUE,
    gap: 2,
    margin: "auto",
  },
  NoCompletionsContainer: {
    backgroundColor: Colours.PURPLEBLUE,
    height: 100,
    borderRadius: 10,
  },
  NoCompletionsMsg: {
    color: "white",
    paddingTop: 10,
    margin: "auto",
  },
});
