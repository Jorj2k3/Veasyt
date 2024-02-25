import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(data);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{ uri: data?.photo?.images?.large?.url }}
            className="w-full h-72 rounded-2xl object-cover"
          />

          <View className="absolute flex-row justify-between inset-x-0 top-5 px-6">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome name="chevron-left" size={24} color="#06828E" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-md items-center justify-center bg-[#06828E]"
            >
              <FontAwesome name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row justify-between inset-x-0 bottom-5 px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-gray-100 text-[32px] font-bold">
                {data?.price ? `${data?.price}` : "No price range found"}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name && data.name.replace(/^"(.*)"$/, "$1")}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={24} color="#8597A2" />
            <Text className="text-[#428288] text-[14px] font-bold">
              {data?.location_string
                ? data?.location_string
                : "No exact location can be given"}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-4">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 bg-red-200 items-center justify-center shadow-md rounded-2xl">
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#428288] text-[24px] font-bold">
                  {data?.rating}
                </Text>
                <Text className="text-[#428288] text-[12px] font-bold">
                  Ratings
                </Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 bg-red-200 items-center justify-center shadow-md rounded-2xl">
                <FontAwesome name="money" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#428288] text-[24px] font-bold">
                  {data?.price_level}
                </Text>
                <Text className="text-[#428288] text-[12px] font-bold">
                  Price Level
                </Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
