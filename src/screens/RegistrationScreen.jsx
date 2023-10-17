import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PhotoBG from "../../images/PhotoBG.png";
import Header from "../components/Header";
import { useFonts } from "expo-font";

import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const [isNicknameFocused, setIsNicknameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular: require("../../assets/fonts/Roboto-Regular.ttf"),
    Roboto_500Medium: require("../../assets/fonts/Roboto-Medium.ttf"),
    Roboto_700Bold: require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={PhotoBG} style={styles.background}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        {/* <View style={styles.container}> */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.imageAcBox}>
            <View style={styles.imageAc}>
              {/* <Image source={ImageAc} style={styles.image} /> */}
            </View>
            <View style={styles.icon}>
              <Ionicons
                position="absolute"
                name="add-outline"
                size={24}
                color={"#FF6C00"}
                onPress={() => alert("This is a button!")}
              />
            </View>
          </View>
          <Header title="Реєстрація" />
          <TextInput
            placeholder="Логін"
            autoComplete="nickname"
            textContentType="nickname"
            value={login}
            onFocus={() => setIsNicknameFocused(true)}
            onBlur={() => setIsNicknameFocused(false)}
            style={{
              ...styles.text,
              borderColor: isNicknameFocused ? "#FF6C00" : "#E8E8E8",
            }}
            onChangeText={setLogin}
          ></TextInput>
          <TextInput
            placeholder="Адреса електронної пошти"
            autoComplete="email"
            textContentType="emailAddress"
            value={email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            style={{
              ...styles.text,
              borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
            }}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            placeholder="Пароль"
            autoComplete="password"
            textContentType="password"
            secureTextEntry
            value={password}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            style={{
              ...styles.text,
              borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
            }}
            onChangeText={setPassword}
          ></TextInput>

          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
          {/* </View> */}
          {/* </TouchableWithoutFeedback> */}
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "548",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  imageAcBox: {
    position: "absolute",
    top: 0,
    width: 132,
    height: 120,
    transform: [{ translateY: -60 }],
  },
  imageAc: {
    position: "absolute",
    overflow: "hidden",
    width: 120,
    height: 120,
    top: 0,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    // resizeMode: "cover",
  },
  // image: {
  //   top: "40%",
  // },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 12,
    right: 0,
    backgroundColor: "white",
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    paddingLeft: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  // button: {
  //   width: "100%",
  //   height: 52,
  //   backgroundColor: "#FF6C00",
  //   marginTop: 16,
  // },
  button: {
    width: 344,
    height: 52,
    backgroundColor: "#FF6C00",
    marginTop: 44,
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    color: "white",
  },
  linkText: {
    fontFamily: "Roboto_400Regular",
    color: "#1B4371",
    marginTop: 16,
    paddingBottom: 78,
  },
});
