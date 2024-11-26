import { ImageBackground, ScrollView, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreatePursuit from "../components/buttons/CreatePursuit.jsx";
import HostedPursuitInfo from "../components/HostedPuruitInfo.jsx";
import CurrentPursuit from "../components/CurrentPursuit.jsx";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/triangleBG.png")}
      resizeMode="cover"
      style={Styles.image}
      imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
    >
      <ScrollView>
        <View>
          <CurrentPursuit />
          <HostedPursuitInfo />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
