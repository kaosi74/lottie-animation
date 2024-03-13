import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./component/Login";
import Home from "./component/Home"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    // marginVertical: 30,
  },
  input: {
    width: 300,
    paddingVertical: 20,
    paddingLeft: 20,
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
    marginBottom: 7,
  },
  flx: {
    display: "flex",
    marginTop: 10,
    gap: 20,
  },
  btn: {
    backgroundColor: "violet",
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    borderRadius: 5,
    width: 200,
    alignSelf: "center",
  },
  btn2: {
    backgroundColor: "red",
  },
  txt: {
    textAlign: "center",
  },
});
