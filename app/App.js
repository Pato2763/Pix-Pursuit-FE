import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Leaderboard from "./screens/Leaderboard";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "@react-navigation/stack";
import TermsScreen from "./screens/TermsScreen";
import { EmptyScreen } from "./screens/EmptyScreen";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { ChoosePursuitScreen } from "./screens/ChoosePursuitsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBarIcon = ({ name, color }) => {
  return <Icon name={name} size={24} color={color} />;
};

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Leaderboard":
      iconName = "Trophy";
      break;
    case "Profile":
      iconName = "user";
      break;
    default:
      iconName = "home";
      break;
  }
  return <TabBarIcon name={iconName} color={color} />;
};

const NavTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#d9d9d9",
        style: {
          borderTopColor: "#66666666",
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="ChoosePursuits" component={ChoosePursuitScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName="Terms"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={NavTab} />
        <Stack.Screen name="Profile" component={EmptyScreen} />
        <Stack.Screen name="Settings" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
