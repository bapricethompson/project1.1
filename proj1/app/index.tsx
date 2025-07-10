import { Link } from "expo-router";
// import * as ScreenOrientation from "expo-screen-orientation";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  // const [orientation, setOrientation] = useState(null);

  // useEffect(() => {
  //   const subscribe = async () => {
  //     const info = await ScreenOrientation.getOrientationAsync();
  //     setOrientation(info);

  //     const subscription = ScreenOrientation.addOrientationChangeListener(
  //       (evt) => {
  //         setOrientation(evt.orientationInfo.orientation);
  //       }
  //     );

  //     return () => {
  //       subscription.remove(); // ✅ correct way to clean up
  //     };
  //   };

  //   const unsubscribe = subscribe();
  //   return () => {
  //     unsubscribe && unsubscribe.then((cleanup) => cleanup?.());
  //   };
  // }, []);

  // const isLandscape =
  //   orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
  //   orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  return (
    <View style={styles.outerDiv}>
      <Text style={styles.header}>Pack Your Bags</Text>
      <Image
        source={require("../assets/images/suitcase.jpg")}
        style={styles.imagePortrait}
      />
      <Link href="/tripList" asChild>
        <Button label="Get Packin'" testID="get-packin-button" />
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
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  imagePortrait: {
    height: 350,
  },
  imageLandscape: {
    height: 150,
    margin: 15,
  },
});
