import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import calcTimer from "../utils/calcTimer";
import { StyleSheet } from "react-native";
import CreatePursuit from "./buttons/CreatePursuit";

const Timer = ({ createdAt, type, setIsActivePursuit }) => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    if (timeRemaining <= 0) {
    }
    const interval = setInterval(() => {
      setTimeRemaining(calcTimer(createdAt));
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
