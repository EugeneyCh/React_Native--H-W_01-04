import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Button,
} from "react-native";
import PhotoBG from "./images/PhotoBG.png";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/HomeScreen/Home";
import { createStackNavigator } from "@react-navigation/stack";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Login" component={LoginScreen} />
//       <Tab.Screen name="Registration" component={RegistrationScreen} />
//     </Tab.Navigator>
//   );
// }

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={PhotoBG} style={styles.background}>
          <MainStack.Navigator
            initialRouteName="Login"
            style={styles.container}
          >
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ title: "" }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
});
