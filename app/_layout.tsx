import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="about" />
      <Stack.Screen name="ddcHome" />
      <Stack.Screen name="homedocument" />
      <Stack.Screen name="updates" />
      <Stack.Screen name="ads" />
      <Stack.Screen name="mortgage" />


    </Stack>
  );
}
