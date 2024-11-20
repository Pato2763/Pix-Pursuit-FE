import * as Location from "expo-location";

exports.getLocation = (setLocation) => {
  return Location.requestForegroundPermissionsAsync()
    .then(({ status }) => {
      if (status !== "granted") {
        return "permission to access loaction denied";
      }
      return Location.getCurrentPositionAsync();
    })
    .then((location) => {
      setLocation([
        location.coords.latitude,
        location.coords.longitude,
        location.timestamp,
      ]);
    });
};

exports.getTrackedLocation = (setlocationTracked) => {
  return Location.watchPositionAsync(
    {
      accuaracy: Location.Accuracy.BestForNavigation,
      timeInterval: 1000,
      distanceInterval: 5,
    },
    (newLocation) => {
      console.log("new location set", newLocation);
      setlocationTracked([
        newLocation.coords.latitude,
        newLocation.coords.longitude,
        newLocation.timestamp,
      ]);
    }
  );
};
