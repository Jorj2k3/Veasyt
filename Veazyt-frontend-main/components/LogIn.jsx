import { useState, useCallback } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Google from "./svg-components/GoogleSVG";
import Apple from "./svg-components/AppleSVG";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function LogIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [fontsLoaded] = useFonts({
        NotoRegular: require("../assets/fonts/Noto_Sans/static/NotoSans-Regular.ttf"),
        NotoBold: require("../assets/fonts/Noto_Sans/static/NotoSans-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="h-full w-full" onLayout={onLayoutRootView}>
            <View className="w-full px-5 pt-8">
                <Text className="font-bold text-[#FF8C20] text-3xl pb-2" style={{ fontFamily: "NotoBold" }}>
                    Welcome back!
                </Text>
                <Text className="text-base text-gray-400 pb-6">Sign to your account</Text>
                <View>
                    <View className="pb-8">
                        <Text aria-label="Label for Email" nativeID="labelEmail" className="text-black text-base" style={{ fontFamily: "NotoBold" }}>
                            Email
                        </Text>
                        <TextInput aria-label="input" aria-labelledby="labelEmail" onChangeText={setEmail} value={email} className="bg-white text-black py-3 text-base border-b" placeholder="example@gmail.com" style={{ fontFamily: "NotoRegular" }} />
                    </View>
                    <View className="pb-4">
                        <Text aria-label="Label for Password" nativeID="labelPassword" className="text-black text-base" style={{ fontFamily: "NotoBold" }}>
                            Password
                        </Text>
                        <TextInput aria-label="input" aria-labelledby="labelPassword" onChangeText={setPassword} value={password} className="bg-white text-black py-3 text-base border-b" placeholder="******" style={{ fontFamily: "NotoRegular" }} />
                    </View>
                    <Text className="text-base text-[#FF8C20] pb-6" style={{ fontFamily: "NotoRegular" }}>
                        Forgot passsword ?
                    </Text>
                    <Pressable onPress={() => router.push("/home")} className="shadow bg-[#FF8C20] w-full rounded-xl py-3">
                        <Text className="text-white text-lg text-center" style={{ fontFamily: "NotoBold" }}>
                            Log In
                        </Text>
                    </Pressable>
                </View>
                <View className="w-full flex justify-center flex-row pt-6">
                    <Text className="text-black text-base" style={{ fontFamily: "NotoRegular" }}>
                        Don't have an account ?
                    </Text>
                    <Pressable className="pl-1">
                        <Text className="text-[#FF8C20] text-base" style={{ fontFamily: "NotoBold" }}>
                            Sign Up!
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View className="relative border-t  mt-9">
                <Text className="text-black p-1 bg-white font-bold text-base absolute top-[-18px] left-[47%]">Or</Text>
            </View>
            <View className="pt-6">
                <Pressable className="mx-5 border-2 border-[#FF8C20] py-3 rounded-xl px-3 flex flex-row justify-center items-center">
                    <View className="flex justify-center items-center mr-2">
                        <Google width={16} height={16} />
                    </View>

                    <Text className="text-black text-center text-base" style={{ fontFamily: "NotoRegular" }}>
                        Sign in with Google
                    </Text>
                </Pressable>
            </View>
            <View className="pt-6">
                <Pressable className="mx-5 border-2 border-[#FF8C20] py-3 rounded-xl px-3 flex flex-row justify-center items-center">
                    <View className="flex justify-center items-center mr-2">
                        <Apple width={16} height={16} />
                    </View>
                    <Text className="text-black text-center text-base" style={{ fontFamily: "NotoRegular" }}>
                        Sign in with Apple
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
