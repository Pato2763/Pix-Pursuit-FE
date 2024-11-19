import { View, Text, Image } from "react-native";
import Header from "../components/Header";
import HomeLoading from "../components/HomeLoading";
import { useState } from "react";

const HomeScreen = () => {
  const [AcceptedTerms, setAcceptedTerms] = useState(false);

  return !AcceptedTerms ? (
    <HomeLoading setAcceptedTerms={setAcceptedTerms} />
  ) : (
    <Text>in home screen actual</Text>
  );
};

export default HomeScreen;
