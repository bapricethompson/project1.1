import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ label, onPress, icon, style }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F4A261",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
});
