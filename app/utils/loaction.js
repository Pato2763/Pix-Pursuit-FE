import * as Location from "expo-location";

exports.getLocation = async () => {
  return Location.requestForegroundPermissionsAsync().then(({ status }) => {
    if (status !== "granted") {
      return "permission to access loaction denied";
    }
    return Location.getCurrentPositionAsync();
  });
};

exports.getTrackedLocation = (setTrackedLocation) => {
  return Location.requestForegroundPermissionsAsync()
    .then(({ status }) => {
      if (status !== "granted") {
        return "permission to access loaction denied";
      }
    })
    .then(() => {
      return Location.watchPositionAsync(
        {
          accuaracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 5,
        },
        (newLocation) => {
          setTrackedLocation({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            timestamp: newLocation.timestamp,
          });
        }
      );
    });
};
