import GradientBackgroundComponent from "@/components/GradientBackgroundComponent";
import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <GradientBackgroundComponent>
      <View>
        <Text style={{color: '#fff'}}>Dashboard</Text>
      </View>
    </GradientBackgroundComponent>
  );
}
