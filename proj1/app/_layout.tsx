import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="travel-explore"
                size={28}
                color="white"
                style={{ marginRight: 8 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                  fontFamily: "Roboto_700Bold",
                }}
              >
                RoamReady
              </Text>
            </View>
          ),
          headerStyle: { backgroundColor: "#3AAFA9" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
