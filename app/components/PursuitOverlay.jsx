import { useContext, useEffect, useState } from "react";
import { getPursuitbyPursuitID } from "../api";
import { View, Text } from "react-native";
import { UserContext } from "../context/UserContext";
import MapView, { Circle } from "react-native-maps";
import Loading from "./Loading";

export const PursuitOverlay = () => {
  const { user } = useContext(UserContext);
  const [coordinates, setCoordinates] = useState({});
  const [loading, setLoading] = useState(true);
  const difficultyRange = {
    Easy: 250,
    Medium: 500,
    Hard: 750,
  };
  useEffect(() => {
    console.log("in use effect");
    getPursuitbyPursuitID(user.pursuit_id)
      .then((res) => {
        console.log("in async");
        const fetchedCoordinates = {
          random_lat: res.random_lat,
          random_long: res.random_long,
          difficulty: res.difficulty,
        };
        setCoordinates(fetchedCoordinates);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.pursuit_id]);

  if (loading) {
    return (
      <View>
        <Loading />
        <Text>Loading pursuit data...</Text>
      </View>
    );
  }

  return (
    <Circle
      center={{
        latitude: coordinates.random_lat,
        longitude: coordinates.random_long,
      }}
      radius={difficultyRange[coordinates.difficulty]}
      strokeColor="rgba(0, 0, 255, 0.5)"
      fillColor="rgba(0, 0, 255, 0.2)"
    />
  );
};
