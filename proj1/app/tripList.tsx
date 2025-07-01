import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import trips from "./data/trips";
export default function Trips() {
  return (
    <View style={styles.container}>
      {trips.map((trip) => (
        <Link key={trip.id} href={`/packingList?tripID=${trip.id}`} asChild>
          <Pressable
            style={styles.tripCard}
            accessibilityRole="button"
            accessibilityLabel={`Trip to ${trip.location}`}
            testID={`trip-card-${trip.id}`}
          >
            <Text style={styles.location}>{trip.location}</Text>
            <Text style={styles.date}>
              {trip.date_range.start} – {trip.date_range.end}
            </Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  tripCard: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  date: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Roboto_400Regular",
  },
});
