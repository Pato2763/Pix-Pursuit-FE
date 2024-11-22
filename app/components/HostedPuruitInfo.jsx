import { View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { getPursuitsByPursuitID } from "../api";
import MiniLeaderBoardList from "./MiniLeaderBoardList";

const HostedPursuitInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <View>
      <MiniLeaderBoardList />
    </View>
  );
};

export default HostedPursuitInfo;
