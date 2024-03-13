import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lottie from "./Lottie"

export default function Home({ navigation }) {
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning!", "Please enter your name");
    } else {
      try {
        await AsyncStorage.setItem("UserData", name);
        Alert.alert("Success, your data has been updated.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome {name} </Text>
      <View>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter your name"
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View style={styles.flx}>
        <TouchableOpacity onPress={updateData} style={styles.btn}>
          <Text style={styles.txt}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={removeData}
          style={[styles.btn, styles.btn2]}
        >
          <Text style={styles.txt}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Lottie />
      </View>
      <StatusBar style="auto" />
    </View>
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

