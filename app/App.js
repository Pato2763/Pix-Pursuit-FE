import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import Leaderboard from "./screens/Leaderboard";
import Icon from "react-native-vector-icons/AntDesign";
import { createStackNavigator } from "@react-navigation/stack";
import TermsScreen from "./screens/TermsScreen";
import { EmptyScreen } from "./screens/EmptyScreen";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { ChoosePursuitScreen } from "./screens/ChoosePursuitsScreen";
import CreatePursuitScreen from "./screens/CreatePursuitScreen";
import CameraScreen from "./screens/CameraScreen";
import { PhotoProvider } from "./context/Photo";

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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ gestureEnabled: false }}
      />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="ChoosePursuits" component={ChoosePursuitScreen} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <PhotoProvider>
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
          <Stack.Screen
            name="Home"
            component={NavTab}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="CreatePursuit" component={CreatePursuitScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Profile" component={EmptyScreen} />
          <Stack.Screen name="Settings" component={EmptyScreen} />
        </Stack.Navigator>
      </PhotoProvider>
    </NavigationContainer>
  );
}

export default App;
