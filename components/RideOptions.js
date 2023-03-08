import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectDestination,
  selectTravelTimeInformation,
} from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
const data = [
  {
    id: "Uber-X-123",

    title: "Uber X",

    multiplier: 1,

    image: "https://Links.papareact.com/3pn",
  },

  {
    id: "Uber-XL-456",

    title: "Uber XL",

    multiplier: 1.2,

    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",

    title: "Uber LUX",

    multiplier: 1.75,

    image: "https://Links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;
const multiplier = 1.75;

const RideOptionsCard = () => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const [select, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`text-center py-5 text-xl`}> Selecione uma corriada</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-5 ${
              id === select?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>

            <View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat("pr-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  (travelTimeInformation?.duration?.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    100
                )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!select && "bg-gray-300"}`}
          disabled={!select}
        >
          <Text style={tw`text-center text-xl text-white`}>
            Escolha {select?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
