import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import SafeAreaContext from "../components/SafeAreaContext";
import NoBookings from "../components/NoBookings";
const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(true);


  return (
    <SafeAreaContext style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#d7d6d6ff" }}>

        <View style={styles.container}>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Text style={{ color: "#0e6bd5ff", fontSize: 20, fontWeight:600 }}>
              MEET UN / GOK STAFF 📆
            </Text>
            <Text style={{ fontSize: 14, marginLeft: -30 }}>
              Book one-on-one meeting with a staff
            </Text>
          </View>
        </View>

        { !isAvailable ? (
          <NoBookings />
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{fontStyle:'italic',fontWeight:800}}>Field Post I</Text>
            </View>
          </View>
        )}
      </SafeAreaView>
    </SafeAreaContext>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f3f3ff",
    width: "100%",
    padding: 12,
    marginBottom: 12,
  },
});

export default HomeScreen;
