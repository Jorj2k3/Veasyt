import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function City() {
    const { slug } = useLocalSearchParams();
    return (
        <View className="flex-1">
            <Text className="text-black text-xl font-bold pt-14">The city is: {slug}</Text>
        </View>
    );
}
