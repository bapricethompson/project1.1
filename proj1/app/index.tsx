import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
export default function App() {
  return (
    <View style={styles.outerDiv}>
      <Text style={styles.header}>Pack Your Bags</Text>
      <Image
        source={require("../assets/images/suitcase.jpg")}
        style={styles.image}
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
