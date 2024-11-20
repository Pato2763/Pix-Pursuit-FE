import { StyleSheet } from "react-native";
import Colours from "../Colours";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: Colours.LIGHTGREY,
    alignItems: "center",
    borderColor: "black",
    border: "1",
  },
  signUpContainer: {
    gap: 20,
    width: "80%",
    borderRadius: 10,
    padding: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
  },
  inputText: {
    padding: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colours.LIGHTGREY,
    color: "white",
    borderColor: "#D9D9D9",
    borderWidth: 2,
    color: "black",
  },
  forgotAndSignUpText: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  signupBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    color: "white",
    borderColor: "#D9D9D9",
    borderWidth: 2,
    color: "black",
  },
  welcome: {
    fontSize: 20,
    marginBottom: 30,
  },
});
