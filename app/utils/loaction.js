import * as Location from "expo-location";

exports.getLocation = (setLocation) => {
  return Location.getCurrentPositionAsync().then((location) => {
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      timestamp: location.timestamp,
    });
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
