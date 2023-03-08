import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./screens/MapScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="MapScreen"
              options={{ headerShown: false }}
              component={MapScreen}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
