import { PursuitsList } from "../components/PursuitsList";
import { View } from "react-native";
import { choosePursuits } from "../utils/styles/choosePursuits";

export function ChoosePursuitScreen() {
  return (
    <View style={choosePursuits.choosePursuitsPageContainer}>
      <PursuitsList />
    </View>
  );
}
