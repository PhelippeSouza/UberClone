import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin, setOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",

    title: "Selecione uma corrida",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={tw`p-2 pl-6 pt-4 pb-8 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <Image
            source={{ uri: item.image }}
            style={{ height: 120, width: 120 }}
            resizeMode="contain"
          />
          <Text> {item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`${!origin && "opacity-20"}`}>
        <FlatList data={data} renderItem={renderItem} horizontal />
      </View>
    </SafeAreaView>
  );
};

export default NavOptions;
