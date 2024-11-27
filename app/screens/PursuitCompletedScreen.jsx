import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useContext } from "react";
import { View, Text, Pressable, Image, ImageBackground } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet } from "react-native";
import Colours from "../utils/Colours";
import { SafeAreaView } from "react-native-safe-area-context";
import { blueButton } from "../utils/styles/buttons";
import { UserContext } from "../context/UserContext";
import {
  getPursuitImage,
  getCompletedPursuits,
  patchUsersCurrentPursuit,
  patchUsersPoints,
  postPursuitsCompletedByUsers,
} from "../api";
import Loading from "../components/Loading";
import { StyleForTerm } from "../utils/styles/Terms";

const PursuitCompletedScreen = ({ route }) => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  const { distance, userLocation, pursuitLocation, won, pursuit } =
    route.params;
  const [imageLoading, setImageLoading] = useState(true);
  const [imageData, setImageData] = useState(null);
  const [pursuitPoints, setPursuitPoints] = useState(null);
  const [pointsLoading, setPointsLoading] = useState(true);
  const [region, setRegion] = useState({});

  if (won && user.pursuit_id) {
    postPursuitsCompletedByUsers(user.user_id, pursuit.pursuit_id)
      .then((points) => {
        setPursuitPoints(points);
        setPointsLoading(false);
        return patchUsersPoints(user.user_id, points);
      })
      .then((fetchedUser) => {
        patchUsersCurrentPursuit(user.user_id, null);
      });
  }

  const Won = () => {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoContainer}>You Won!</Text>
          <Text style={styles.infoContainer}>You were {distance}m off</Text>
        </View>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              ...userLocation,
              latitudeDelta: Math.abs(
                userLocation.latitude - pursuitLocation.latitude
              ),
              longitudeDelta: Math.abs(
                userLocation.longitude - pursuitLocation.longitude
              ),
            }}
          >
            <Marker coordinate={userLocation} pinColor="blue"></Marker>
            <Marker coordinate={pursuitLocation} pinColor="green"></Marker>
          </MapView>
        </View>
        {pointsLoading ? (
          <Loading />
        ) : (
          <Pressable
            style={styles.button}
            onPress={() => {
              getCompletedPursuits(user.user_id).then(
                (completedPursuitsArr) => {
                  const completedPursuitsIdArr = completedPursuitsArr.map(
                    (pursuit) => {
                      return pursuit.pursuit_id;
                    }
                  );
                  setUser((currUser) => {
                    return {
                      ...currUser,
                      pursuit_id: null,
                      completedPursuits: completedPursuitsIdArr,
                    };
                  });
                }
              );
              navigation.goBack();
            }}
          >
            <Text style={blueButton.text}>Collect {pursuitPoints} Points</Text>
          </Pressable>
        )}
      </SafeAreaView>
    );
  };

  const Lost = () => {
    useEffect(() => {
      getPursuitImage(user.pursuit_id)
        .then((res) => {
          setImageData(res);
          setImageLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [user.pursuit_id]);

    let text = "You're nowhere near, Try harder!";
    if (distance < 150) {
      text = "You're close, keep trying!";
    } else if (distance < 300) {
      text = "Getting there, keep going!";
    }

    return (
      <ImageBackground
        source={require("../../assets/triangleBG.png")}
        resizeMode="cover"
        style={StyleForTerm.image}
        imageStyle={{ opacity: 0.15, backgroundColor: "white" }}
      >
        <SafeAreaView style={styles.safeAreaContainer}>
          <Text style={styles.infoContainer}>{text}</Text>
          <View>
            {imageLoading ? (
              <Loading />
            ) : (
              <Image style={styles.pursuitImage} source={{ uri: imageData }} />
            )}
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={blueButton.text}>Go Back</Text>
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      borderColor: "white",
      gap: 30,
    },
    infoContainer: {
      padding: 10,
      margin: "auto",
      fontWeight: "bold",
      alignContent: "center",
    },
    container: {
      flex: 1,
      alignContent: "center",
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 150,
      width: "50%",
      margin: "auto",
      elevation: 3,
      backgroundColor: Colours.AQUA_BLUE,
    },

    map: {
      width: "90",
      height: "100%",
      flex: 1,
      gap: 20,
      width: "80%",
      borderRadius: 10,
      padding: 5,
      borderColor: "#D9D9D9",
      borderWidth: 2,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: Colours.AQUA_BLUE,
      marginHorizontal: "auto",
    },
    pursuitImage: {
      height: 550,
      width: 300,
      margin: "auto",
      borderRadius: 30,
      borderColor: "#D9D9D9",
      borderWidth: 2,
      backgroundColor: Colours.AQUA_BLUE,
      padding: 5,
    },
  });
  return won ? <Won /> : <Lost />;
};

export default PursuitCompletedScreen;
