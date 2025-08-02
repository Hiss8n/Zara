import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SafeAreaContext from "../components/SafeAreaContext";
import { useAuthStore } from "../store/AuthStore";
import { LinearGradient } from "expo-linear-gradient";

const verifyCode = () => {
  const [code, setCode] = useState("");

  const { isLoading, verify, user } = useAuthStore();

  const handleSubmit = () => {};
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaContext style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.inputContent}>
              <Text style={{ fontSize: 28, color: "#2b272bff" }}>
                {" "}
                Enter verification code
              </Text>
              <TextInput
                placeholder="Enter Verification code..."
                onChangeText={setCode}
                value={code.trim()}
                placeholderTextColor="#868383ff"
                style={styles.input}
              />
            </View>
            <LinearGradient
              colors={["#1717d5ff", "#30aadaff"]}
              start={{
                x: 0,
                y: 0,
              }}
              end={{ x: 1, y: 1 }}
              style={styles.forward}
            >
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isLoading ? (
                  <Text style={{ color: "#efefe7ff", fontSize: 16 }}>
                    Loading...
                  </Text>
                ) : (
                  <Text
                    style={{ fontStyle: "normal", fontSize: 18, color: "#fff" }}
                  >
                    Submit{" "}
                  </Text>
                )}
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </SafeAreaView>
      </SafeAreaContext>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContent: {
    width: 330,
    height: 280,
    backgroundColor: "#f1efefff",
    borderRadius: 10,
    justifyContent: "center",
    //alignItems:'center',
    alignContent: "center",
  },
  input: {
    fontSize: 20,
    marginTop:30,
    borderRadius: 12,
    borderWidth:0.6,
    borderColor: "blue",
    paddingLeft: 12,
    color: "#2b272bff",
  },
     forward:{
    //flexDirection:'row',
    //alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    borderRadius:20,
    width:220,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
    
    

  //padding:18,
  },
});

export default verifyCode;
