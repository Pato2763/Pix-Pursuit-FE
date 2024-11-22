import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapViewer } from "../components/MapViewer";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import ChoosePursuit from "../components/buttons/FindPursuit.jsx";
import HostedPursuitInfo from "../components/HostedPuruitInfo.jsx";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <CreatePursuit redirect={"CreatePursuit"} />
        <ChoosePursuit redirect={"ChoosePursuits"} />
        <HostedPursuitInfo />
      </View>
      <MapViewer />
    </SafeAreaView>
  );
};

export default HomeScreen;
