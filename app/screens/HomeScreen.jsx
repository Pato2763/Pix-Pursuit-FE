import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import HostedPursuitInfo from "../components/HostedPuruitInfo.jsx";
import CurrentPursuit from "../components/CurrentPursuit.jsx";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <CreatePursuit redirect={"CreatePursuit"} />
          <CurrentPursuit />
          <HostedPursuitInfo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
