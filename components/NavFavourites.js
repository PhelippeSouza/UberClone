import React from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "4123",
    icon: "briefcase",

    location: "Work",

    destination: "London Eye, London, UK",
  },

  {
    id: "456",
    icon: "briefcase",

    location: "Work",

    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <View>
            <Text style={tw` font-semibold text-lg`}>(location)</Text>
            <Text style={tw` text-gray-500`}> {destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
