import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import trips from "./data/trips";
export default function Trips() {
  return (
    <View style={styles.container}>
      {trips.map((trip) => (
        <Link key={trip.id} href={`/packingList?tripID=${trip.id}`} asChild>
          <TouchableOpacity style={styles.tripCard}>
            <Text style={styles.location}>{trip.location}</Text>
            <Text style={styles.date}>
              {trip.date_range.start} – {trip.date_range.end}
            </Text>
          </TouchableOpacity>
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
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});
