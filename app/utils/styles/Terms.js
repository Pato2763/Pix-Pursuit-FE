import { StyleSheet } from "react-native";
import Colours from "../Colours";

export const StyleForTerm = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1,
    backgroundColor: Colours.LIGHTGREY,
    alignItems: "center",
    borderColor: "black",
    border: "1",
    padding: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 25,
  },
  text: {
    marginBottom: 15,
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  textContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 50,
    gap: 20,
    width: "80%",
    borderRadius: 10,
    padding: 10,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    backgroundColor: "rgba(300, 300, 300, 0.7)",
    paddingTop: 10,
  },
  signUpContainer: {
    gap: 10,
    width: "80%",
    borderRadius: 10,
    padding: 20,
    borderColor: "#D9D9D9",
    borderWidth: 2,
    backgroundColor: "rgba(300, 300, 300, 0.8)",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  inputText: {
    padding: 15,
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
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
    backgroundColor: Colours.AQUA_BLUE,
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
    backgroundColor: "white",
  },
  welcome: {
    fontSize: 20,
    marginBottom: 30,
  },
  errorMsg: {
    color: "red",
    width: 200,
    textAlign: "center",
    marginHorizontal: "auto",
  },
});
