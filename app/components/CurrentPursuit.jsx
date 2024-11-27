import { View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getPursuitImage } from "../api";
import { UserContext } from "../context/UserContext";
import { NoActivePursuitHome } from "./NoActivePursuitHome";
import ActivePursuit from "./ActivePursuit";
import InactivePursuit from "./InactivePursuit";

const CurrentPursuit = () => {
  const [imageData, setImageData] = useState(null);
  const [isActivePursuit, setIsActivePursuit] = useState(true);
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
    console.log(isActivePursuit, "here");
  }, [user.pursuit_id, isActivePursuit]);

  return (
    <View>
      {!user.pursuit_id ? (
        <NoActivePursuitHome />
      ) : isActivePursuit ? (
        <ActivePursuit
          setIsActivePursuit={setIsActivePursuit}
          setImageLoading={setImageLoading}
          imageLoading={imageLoading}
          imageData={imageData}
        />
      ) : (
        <InactivePursuit setIsActivePursuit={setIsActivePursuit} />
      )}
    </View>
  );
};

export default CurrentPursuit;
