import * as React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  View,
  Keyboard,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Login" />
        <TextInput
          placeholder="Email"
          autoComplete="email"
          textContentType="emailAddress"
          value={email}
          style={styles.text}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          placeholder="Password"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          value={password}
          style={styles.text}
          onChangeText={setPassword}
        ></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.linkText}>
            Don't have an account? Sign up" onPress
          </Text>
        </TouchableOpacity>

        {/* <Button title="Login" style={styles.input} onPress={onLogin} /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
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
    placeholderTextColor: "#BDBDBD",
  },
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
