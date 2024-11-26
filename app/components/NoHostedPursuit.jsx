import { Text, View, StyleSheet } from "react-native";
import CreatePursuit from "./buttons/CreatePursuit";
export const NoHostedPursuit = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        Get involved with the community and host your own pursuit! Take your
        best photo of your location then sit back and watch as others hunt to be
        the first to find it.
      </Text>
      <View style={Styles.btn}>
        <CreatePursuit />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: "rgba(300, 300, 300, 0.8)",
    padding: 20,
    margin: "auto",
    borderRadius: 10,
    borderColor: "#D9D9D9",
    borderWidth: 2,
  },
  text: {
    width: 300,
    margin: "auto",
    textAlign: "center",
    marginBottom: 40,
  },
  btn: {
    width: 200,
    margin: "auto",
  },
});
