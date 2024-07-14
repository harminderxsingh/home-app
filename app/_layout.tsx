import { Stack } from "expo-router";
import { AuthProvider } from '@/contexts/AuthContext';
import { BlurProvider } from "@/contexts/BlurContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <BlurProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="login" />
          <Stack.Screen name="signup" />
          <Stack.Screen name="dashboard" />
          <Stack.Screen name="about" />
          <Stack.Screen name="ddcHome" />
          <Stack.Screen name="homedocument" />
          <Stack.Screen name="updates" />
          <Stack.Screen name="ads" />
          <Stack.Screen name="mortgage" />
          <Stack.Screen name="otp" />
          <Stack.Screen name="contact" />
          <Stack.Screen name="notificationsetting" />
          <Stack.Screen name="loantracker" />
          <Stack.Screen name="chat" />
          <Stack.Screen name="userSetting" />
          <Stack.Screen name="waterbill" />
          <Stack.Screen name="electricbill" />




        </Stack>
      </BlurProvider>
    </AuthProvider>
  );
}
