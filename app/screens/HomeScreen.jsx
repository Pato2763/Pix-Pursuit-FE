import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [AcceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <SafeAreaView>
      {!AcceptedTerms ? (
        <HomeLoading setAcceptedTerms={setAcceptedTerms} />
      ) : (
        <Text>in home screen actual</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
