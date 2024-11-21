import { ActivityIndicator } from "react-native";
import Colours from "../utils/Colours";

const Loading = () => {
  return <ActivityIndicator size="large" color={Colours.AQUA_BLUE} />;
};

export default Loading;
