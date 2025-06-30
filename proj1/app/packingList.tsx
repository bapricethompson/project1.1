import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Checkbox } from "react-native-paper"; // <-- Import Checkbox here
import packing_lists from "./data/packingLists";

export default function PackingList({ tripID: testTripID }) {
  const params = useLocalSearchParams();
  const tripID = testTripID ?? Number(params.tripID);
  const packingListForTrip = packing_lists[tripID];
  const [checkedItems, setCheckedItems] = useState({});
  const [newItem, setNewItem] = useState("");
  const [packingList, setPackingList] = useState(packingListForTrip);

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!packingListForTrip) {
    return (
      <View style={{ padding: 16 }}>
        <Text>No packing list found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Your Items:</Text>
      <ScrollView style={styles.scrollView}>
        {packingListForTrip.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Checkbox
              testID={`checkbox-${index}`}
              status={checkedItems[index] ? "checked" : "unchecked"}
              onPress={() => toggleCheckbox(index)}
              color="#F4A261" // optional: checkbox color when checked
            />
            <Text
              testID={`item-text-${index}`}
              style={[
                styles.itemText,
                checkedItems[index] && styles.itemTextChecked,
              ]}
            >
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingLeft: 32,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#000",
    width: "80%",
    alignSelf: "center",
    fontFamily: "Roboto_400Regular",
  },
  header: {
    textAlign: "left",
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  itemTextChecked: {
    textDecorationLine: "line-through",
    color: "#888",
    fontFamily: "Roboto_400Regular",
  },
});
