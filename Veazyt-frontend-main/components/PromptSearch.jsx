import { useState, useCallback } from "react";
import { TextInput, View, Text, Pressable, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import RightArrow from "./svg-components/RightArrowSVG";
import { London, Berlin } from "../assets/images/index";
export default function PromptSearch() {
    const [prompt, setPrompt] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const topInsets = useSafeAreaInsets().top;

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

    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setStartDate(currentDate);
    };

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setEndDate(currentDate);
    };
    return (
        <View>
            <View className="w-full px-5" onLayout={onLayoutRootView}>
                <TextInput onChangeText={setPrompt} value={prompt} className="px-3 py-2 text-base border-2 border-[#FF8C20] rounded-lg" style={{ fontFamily: "NotoRegular" }} placeholder="Prompt..." />
                <View className=" mt-4 py-2 flex flex-row justify-center ">
                    <View className="flex justify-center items-center mr-5 pr-3 py-2 border-2 border-[#FF8C20] rounded-lg">
                        <Text className="text-base" style={{ fontFamily: "NotoRegular" }}>
                            Start Date:
                        </Text>
                        <DateTimePicker value={startDate} mode="date" onChange={onChangeStart} accentColor="orange" />
                    </View>

                    <View className="flex justify-center items-center pr-3 py-2 border-2 border-[#FF8C20] rounded-lg">
                        <Text className="text-base" style={{ fontFamily: "NotoRegular" }}>
                            End Date:
                        </Text>
                        <DateTimePicker value={endDate} mode="date" onChange={onChangeEnd} accentColor="orange" />
                    </View>
                </View>
                <View className="mt-4 flex flex-row justify-center">
                    <Pressable className="bg-[#FF8C20] rounded-xl py-3 w-[100px]">
                        <Text className="text-white text-center text-base " style={{ fontFamily: "NotoBold" }}>
                            Create
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View className="mt-7 w-full border-t border-gray-300"></View>
            <View className="pl-5">
                <View className="flex flex-row justify-between items-end mt-4">
                    <Text className="text-2xl text-[#FF8C20]" style={{ fontFamily: "NotoBold" }}>
                        Tours
                    </Text>
                    <Text className="text-base text-gray-400 pr-5" style={{ fontFamily: "NotoRegular" }}>
                        more
                    </Text>
                </View>
                <View className="flex flex-row gap-x-4 overflow-hidden pt-4">
                    <View className="bg-[#FF8C20] w-[200px] rounded-lg">
                        <View className="w-full rounded-xl bg-black mb-4">
                            <ImageBackground source={London} imageStyle={{ borderRadius: 8, opacity: 0.6 }}>
                                <View className="px-4 pt-4 rounded-lg flex flex-col">
                                    <Text className="text-white font-bold text-xl pb-2" style={{ fontFamily: "NotoBold" }}>
                                        London
                                    </Text>
                                    <Text className="text-white font-bold text-xl pb-2" style={{ fontFamily: "NotoBold" }}>
                                        UK
                                    </Text>
                                    <Text className="text-white font-bold text-xl pb-9" style={{ fontFamily: "NotoBold" }}>
                                        32k visits
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <Pressable className="bg-white p-2 mr-4 mb-4 w-[60px] flex flex-row justify-center items-center rounded-lg self-end">
                            <RightArrow width={20} height={20} />
                        </Pressable>
                    </View>
                    <View className="bg-[#FF8C20] w-[200px] rounded-lg">
                        <View className="w-full rounded-xl bg-black mb-4">
                            <ImageBackground source={Berlin} imageStyle={{ borderRadius: 8, opacity: 0.6 }}>
                                <View className="px-4 pt-4 rounded-lg flex flex-col">
                                    <Text className="text-white font-bold text-xl pb-2" style={{ fontFamily: "NotoBold" }}>
                                        Berlin
                                    </Text>
                                    <Text className="text-white font-bold text-xl pb-2" style={{ fontFamily: "NotoBold" }}>
                                        Germany
                                    </Text>
                                    <Text className="text-white font-bold text-xl pb-9" style={{ fontFamily: "NotoBold" }}>
                                        17k visits
                                    </Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <Pressable className="bg-white p-2 mr-4 mb-4 w-[60px] flex flex-row justify-center items-center rounded-lg self-end">
                            <RightArrow width={20} height={20} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <View className="w-full px-5 mt-4">
                <View className="w-full h-[20px] bg-white border border-[#FF8C20] p-[2px] rounded-3xl">
                    <View className="w-[30px] h-[14px] bg-[#FF8C20] rounded-3xl"></View>
                </View>
            </View>
        </View>
    );
}
