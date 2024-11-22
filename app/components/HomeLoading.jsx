import { Button, Pressable, View, Text } from "react-native";
import Accept from "./buttons/Accept";
import { Styles } from "../utils/styles/login";
import { StyleForTerm } from "../utils/styles/Terms";

const HomeLoading = () => {
  return (
    <View style={StyleForTerm.container}>
      <View style={StyleForTerm.textContainer}>
        <Text style={StyleForTerm.textTitle}>Safe and Appropriate Use</Text>
        <Text style={StyleForTerm.text}>
          While you are using our Services, please be aware of your
          surroundings, and play and communicate safely. You agree that your use
          of the Services is at your own risk, and that you will not use the
          Services to violate any applicable law, regulation, Event policies, or
          instructions as outlined in these Terms and you will not encourage or
          enable any other individual to do so.
        </Text>
        <Text style={StyleForTerm.textTitle}>Rules and Regulations</Text>
        <Text style={StyleForTerm.text}>
          Further, you agree that in conjunction with your use of the Services
          you will not make available any unlawful, inappropriate, or commercial
          Content. You agree that you will not submit inaccurate, misleading, or
          inappropriate Content, including data submissions, edits, or removal
          requests.
        </Text>
      </View>
      <Accept tarRedirect="Login" />
    </View>
  );
};

export default HomeLoading;
