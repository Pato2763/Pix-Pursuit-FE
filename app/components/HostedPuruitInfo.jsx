import { View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { getPursuitsByPursuitID } from "../api";
import MiniLeaderBoardList from "./MiniLeaderBoardList";
import { NoHostedPursuit } from "./NoHostedPursuit";

const HostedPursuitInfo = () => {
  const { user } = useContext(UserContext);
  const [isHosting, setIsHosting] = useState();

  useEffect(() => {
    if (user.hosted_pursuit_id) {
      setIsHosting(true);
    } else {
      setIsHosting(false);
    }
  }, [user.hosted_pursuit_id]);

  return (
    <View>{isHosting ? <MiniLeaderBoardList /> : <NoHostedPursuit />}</View>
  );
};

export default HostedPursuitInfo;
