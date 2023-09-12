// Home.js

import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "../PostsScreen";
import ProfileScreen from "../ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen";

function CreatePostsButton() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </TouchableOpacity>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Settings!</Text>
    // </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "CreatePosts") {
            iconName = focused ? <CreatePostsButton /> : <CreatePostsButton />;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          display: "none",
        },
      }}
      // style={styles.tabBarIcon}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={26}
              color={"gray"}
              onPress={() => alert("This is a button!")}
              // style={{ maringRight: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIcon: {
    justifyContent: "center",
    title: "",
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
  },
});

export default Home;
