import { useContext, useEffect, useState } from "react";
import { getPursuitbyPursuitID } from "../api";
import { UserContext } from "../context/UserContext";
import { Circle } from "react-native-maps";

export const PursuitOverlay = ({
  coordinates,
  setCoordinates,
  setPursuitImage,
}) => {
  const { user } = useContext(UserContext);

  const difficultyRange = {
    Easy: 250,
    Medium: 500,
    Hard: 750,
  };
  useEffect(() => {
    getPursuitbyPursuitID(user.pursuit_id)
      .then((res) => {
        const fetchedCoordinates = {
          random_lat: res.random_lat,
          random_long: res.random_long,
          difficulty: res.difficulty,
        };
        setPursuitImage(res.image);
        setCoordinates(fetchedCoordinates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

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
