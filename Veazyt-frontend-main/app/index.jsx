import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import LogIn from "../components/LogIn";
const fadeIn = {
    0: {
        opacity: 0,
    },
    0.5: {
        opacity: 1,
    },
    1: {
        opacity: 0,
    },
};
export default function App() {
    const topInsets = useSafeAreaInsets().top;
    const [anim, setAnim] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAnim(true);
        }, 2000);
    }, []);
    return (
        <View className="flex-1 bg-white">
            <View className="z-2 flex-1 items-center justify-center flex-col" style={{ paddingTop: topInsets ? topInsets + 10 : 20 }}>
                {anim == false ? (
                    <Animatable.View animation={fadeIn} duration={2000} easing={"ease-in-out"}>
                        <Logo width={150} height={150} />
                        <Text className="text-3xl font-bold text-center text-white pt-2">Veasyt</Text>
                    </Animatable.View>
                ) : (
                    <LogIn />
                )}
            </View>
        </View>
    );
}
