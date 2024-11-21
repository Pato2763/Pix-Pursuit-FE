import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PursuitsList } from "../components/PursuitsList";
import { View } from "react-native";
import { choosePursuits } from "../utils/styles/choosePursuits";

export function ChoosePursuitScreen() {
  return (
    <SafeAreaView>
      <View style={choosePursuits.choosePursuitsPageContainer}>
        <Text style={choosePursuits.header}>Pursuits screen</Text>
        <PursuitsList />
      </View>
    </SafeAreaView>
  );
}
