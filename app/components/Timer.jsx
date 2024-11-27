import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import calcTimer from "../utils/calcTimer";
import { StyleSheet } from "react-native";
import CreatePursuit from "./buttons/CreatePursuit";
import { UserContext } from "../context/UserContext";

const Timer = ({ createdAt, type, pursuit_id }) => {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (calcTimer(createdAt, pursuit_id) <= 0) {
      setUser((currUser) => {
        const { currentPursuit } = currUser;
        currentPursuit.active = false;
        return { ...currUser, currentPursuit };
      });
    }
    const interval = setInterval(() => {
      setTimeRemaining(calcTimer(createdAt, pursuit_id));
    }, 1000);
    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <View style={Styles.container}>
      <Text>{timeRemaining}</Text>
      {timeRemaining !== "Pursuit timer expired!" ? null : type ===
        "selected" ? null : (
        <View style={Styles.createBtn}>
          <CreatePursuit />
        </View>
      )}
    </View>
  );
};

export default Timer;

const Styles = StyleSheet.create({
  container: {
    margin: "auto",
    padding: 6,
  },
  createBtn: {
    marginTop: 10,
  },
});
