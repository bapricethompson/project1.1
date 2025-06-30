import { Link } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
export default function App() {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    // Get initial orientation
    ScreenOrientation.getOrientationAsync().then((info) => {
      setOrientation(info);
    });

    // Subscribe to orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (evt) => {
        setOrientation(evt.orientationInfo.orientation);
      }
    );

    // Cleanup listener on unmount
    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  return (
    <View style={styles.outerDiv}>
      <Text style={styles.header}>Pack Your Bags</Text>
      <Image
        source={require("../assets/images/suitcase.jpg")}
        style={[
          styles.image,
          orientation &&
            (orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
            orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT
              ? styles.imageLandscape
              : styles.imagePortrait),
        ]}
      />
      <Link href="/tripList" asChild>
        <Button label="Get Packin'" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  outerDiv: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  image: {
    width: "90%", // 50% of container width
    height: 100,
    aspectRatio: 1, // keeps image square, adjust as needed
    resizeMode: "contain",
  },
});
