import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getPursuitImage } from "../api";
import { UserContext } from "../context/UserContext";
import { NoActivePursuitHome } from "./NoActivePursuitHome";
import ActivePursuit from "./ActivePursuit";
import InactivePursuit from "./InactivePursuit";

const CurrentPursuit = () => {
  const [imageData, setImageData] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const { user } = useContext(UserContext);
  useEffect(() => {
    setImageLoading(true);
    getPursuitImage(user.pursuit_id)
      .then((res) => {
        setImageData(res);
        setImageLoading(false);
      })
      .catch((err) => {
        setImageData(null);
        setImageLoading(false);
      });
  }, []);

  if (!user.currentPursuit) {
    return <View></View>;
  }

  return (
    <View>
      {!user.currentPursuit.pursuit_id ? (
        <NoActivePursuitHome />
      ) : user.currentPursuit.active ? (
        <ActivePursuit
          setImageLoading={setImageLoading}
          imageLoading={imageLoading}
          imageData={imageData}
        />
      ) : (
        <InactivePursuit />
      )}
    </View>
  );
};

export default CurrentPursuit;
