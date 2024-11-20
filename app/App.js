import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Leaderboard from "./screens/Leaderboard";
import { createStackNavigator } from "@react-navigation/stack";
import TermsScreen from "./screens/TermsScreen";
import { EmptyScreen } from "./screens/EmptyScreen";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
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
        <Stack.Screen name="Home" component={NavTab} />
        <Stack.Screen name="Profile" component={EmptyScreen} />
        <Stack.Screen name="Settings" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
