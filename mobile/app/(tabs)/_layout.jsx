import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import useAuthStore from "../store/AuthStore";

function TabLayout() {
  const { user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  });

  useEffect(() => {
    const validateUser = user;
    if (!validateUser) {
      //router.push("/(auth)/login")
    }
  }, [user, checkAuth]);
  //console.log(user)
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        //headerShown:false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
