import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import PhotoBG from "../../images/PhotoBG.png";

import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  return (
    <ImageBackground source={PhotoBG} style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Header title="Registration" />
          <TextInput
            placeholder="Login"
            autoComplete="nickname"
            textContentType="nickname"
            value={login}
            style={styles.text}
            onChange={setLogin}
          ></TextInput>
          <TextInput
            placeholder="Email"
            autoComplete="email"
            textContentType="emailAddress"
            value={email}
            style={styles.text}
            onChange={setEmail}
          ></TextInput>
          <TextInput
            placeholder="Password"
            autoComplete="password"
            textContentType="password"
            secureTextEntry
            value={password}
            style={styles.text}
            onChange={setPassword}
          >
            {/* <Button /> */}
          </TextInput>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Registrate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>
              Already have an account? Sign in{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

  text: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginTop: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // placeholderTextColor: "#BDBDBD",
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
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    color: "white",
  },
  linkText: {
    color: "#1B4371",
    marginTop: 16,
  },
});
