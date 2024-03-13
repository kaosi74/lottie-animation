import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";

export default function Lottie() {
  const heartRef = useRef(null);
  const animation2 = useRef(null);
  const [liked, setLiked] = useState(false);
  useEffect(() => {}, []);

  const handleClick = () => {
    if (liked) {
      heartRef?.current?.reset();
    } else {
      heartRef?.current?.play(10, 120);
    }
    setLiked(!liked);
  };

  const openAnime = () => {
    animation2?.current?.play(0, 50);
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView
          style={{ flex: 1 }}
          source={require("../assets/animation2.json")}
          autoPlay
          loop
        />
      </View>
      <View style={styles.iconRow}>
        <Pressable style={styles.icon} onPress={handleClick}>
          <LottieView
            style={{ flex: 1 }}
            ref={heartRef}
            loop={false}
            source={require("../assets/animation3.json")}
          />
        </Pressable>
        <Pressable style={styles.icon} onPress={openAnime}>
          <LottieView
            style={{ flex: 1 }}
            ref={animation2}
            loop={false}
            source={require("../assets/animation.json")}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  txt: {
    fontSize: 24,
    fontStyle: "italic",
  },
  welcome: {
    height: 200,
    aspectRatio: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 200,
    aspectRatio: 1,
  },
});
