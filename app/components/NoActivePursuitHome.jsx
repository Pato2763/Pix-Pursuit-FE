import { Text, View, StyleSheet } from "react-native";
import ChoosePursuit from "./buttons/ChoosePursuit";
export const NoActivePursuitHome = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        Welcome to Pix Pursuit, it appears you have no active pursuit. Click the
        button below to choose a pursuit to chase !
      </Text>
      <View style={Styles.btn}>
        <ChoosePursuit />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: 100,
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
