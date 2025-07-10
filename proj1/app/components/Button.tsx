import { LinkProps } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps extends LinkProps {
  label: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  style?: any;
  testID?: string;
}

export default function Button({
  label,
  onPress,
  icon,
  style,
  testID,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      testID={testID}
      {...props}
    >
      {icon}
      <Text style={styles.text}>{label}</Text>
    </Pressable>
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
