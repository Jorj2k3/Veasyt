import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Attractions,
  Avatar,
  Hotels,
  NotFound,
  Restaurants,
} from "../../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemsCardContainer from "../components/ItemsCardContainer";
import { ActivityIndicator } from "react-native";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = React.useState("restaurants");
  const [loading, setLoading] = React.useState(false);
  const [mainData, setMainData] = React.useState([]);
  const [bl_lat, setBl_lat] = React.useState(null);
  const [bl_lon, setBl_lon] = React.useState(null);
  const [tr_lat, setTr_lat] = React.useState(null);
  const [tr_lon, setTr_lon] = React.useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData(bl_lat, bl_lon, tr_lat, tr_lon, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setLoading(false);
      }, 1000);
    });
  }, [bl_lat, bl_lon, tr_lat, tr_lon, type]);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[#0B646B] text-[36px] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[36px]">new places with us</Text>
        </View>

        <View className="w-12 h-12 ml-6 bg-gray-400 shadow-lg rounded-md items-center justify-center">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row itmes-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lon(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lon(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyBbtHHUDEKg_U7IK-dkeX9x72wI3T5Xuhg",
            language: "en",
          }}
        />
      </View>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotel"}
              title={"Hotels"}
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"attractions"}
              title={"Attractions"}
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"restaurants"}
              title={"Restaurants"}
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            {bl_lat == null ? (
              <></>
            ) : (
              <View className="flex-row items-center justify-between px-4 mt-8">
                <Text className="text-[#2C7379] text-[28px] font-bold">
                  Top Tips
                </Text>
                <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                  <Text className="text-[#A0C4C7] text-[20px] font-bold">
                    Explore
                  </Text>
                  <FontAwesome
                    name="long-arrow-right"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            )}

            <View className="flex-row items-center justify-evenly px-4 mt-8 flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map(
                    (item, index) =>
                      item?.photo?.images?.medium?.url && (
                        <ItemsCardContainer
                          key={index}
                          imageSrc={
                            item?.photo?.images?.medium?.url
                              ? item?.photo?.images?.medium?.url
                              : null
                          }
                          title={item?.name}
                          location={item?.location_string}
                          data={item}
                        />
                      )
                  )}
                </>
              ) : bl_lat == null ? (
                <></>
              ) : loading ? (
                <View className="flex-1 items-center justify-center">
                  <ActivityIndicator size="large" color="#0B646B" />
                </View>
              ) : (
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-32 h-32 object-cover" />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    oops! No data found
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
