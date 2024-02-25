import { Pressable, TextInput, View, Text } from "react-native";
// import { useState } from "react";
// import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PromptSearch from "../../components/PromptSearch";
import { Stack } from "expo-router";
import HomeSVG from "../../components/svg-components/HomeSVG";
import SearchSVG from "../../components/svg-components/SearchSVG";
import PlaneSVG from "../../components/svg-components/PlaneSVG";
import MoreSVG from "../../components/svg-components/MoreSVG";

export default function Home() {
    const topInsets = useSafeAreaInsets().top;
    return (
        <>
            <View className="flex-1 bg-white">
                <View className="z-2 flex-1 flex-col" style={{ paddingTop: topInsets ? topInsets + 10 : 20 }}>
                    <PromptSearch />
                </View>
                <View className=" h-[100px] w-full bg-[#FF8C20] self-end flex flex-row justify-around">
                    <View className="flex flex-col justify-center items-center">
                        <HomeSVG width={30} height={30} />
                        <Text className="text-white text-base" style={{ fontFamily: "NotoBold" }}>
                            Home
                        </Text>
                    </View>
                    <View className="flex flex-col justify-center items-center">
                        <SearchSVG width={30} height={30} />
                        <Text className="text-white text-base" style={{ fontFamily: "NotoBold" }}>
                            Toures
                        </Text>
                    </View>
                    <View className="flex flex-col justify-center items-center">
                        <PlaneSVG width={30} height={30} />
                        <Text className="text-white text-base" style={{ fontFamily: "NotoBold" }}>
                            Trips
                        </Text>
                    </View>
                    <View className="flex flex-col justify-center items-center">
                        <MoreSVG width={30} height={30} />
                        <Text className="text-white text-base" style={{ fontFamily: "NotoBold" }}>
                            More
                        </Text>
                    </View>
                </View>
            </View>
        </>
    );
}
