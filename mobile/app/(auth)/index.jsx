import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {LinearGradient }from "expo-linear-gradient"
import{ Ionicons} from "@expo/vector-icons"
import { Link } from "expo-router";


const WelcomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
    colors={['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#393739ff']}
      style={{
        flex: 1,
        paddingTop: insets.top,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >

        <View style={{paddingBottom:100 + insets.bottom}}>  
      <View
      //colors={['#ffffff','#eae0eaff']}
      style={styles.mainContent}
      >
        <Text style={{fontFamily:'poppins',
            fontStyle:'normal',fontSize:28,
            textAlign:'center',paddingBottom:12,
            paddingLeft:0,marginLeft:-25}}><Text style={{fontSize:66,fontWeight:700,color:'#0456ec',shadowOffset:10,shadowColor:'green'}}>Z</Text>ara</Text>
        <Text style={{fontFamily:'sans',fontFeatureSettings:2,color:'#1d1d1fff',fontStyle:'italic',fontSize:16}}>book,connect & build </Text>
      </View>
      </View>
      {/* ARROW FORWARD */}
      <Link href={'/login'} 
      asChild>  
       
      <TouchableOpacity>  
      <LinearGradient
      colors={['#1717d5ff','#30aadaff']}
      start={{
        x:0,y:0
      }}
      end={{x:1,y:1}}
       style={styles.forward}>
        <Text style={{fontStyle:'normal',fontSize:18,color:'#fff'}}>Continue with email </Text>
         <Ionicons name='arrow-forward-circle' size={22} color="#dad6d6ff" style={{marginLeft:22,fontSize:30}} />
        
      </LinearGradient>
      </TouchableOpacity>

      </Link>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent:{
    marginTop:100,
    paddingBottom:10
    
  },
  forward:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:0,
    marginTop:50,
    paddingTop:15,
    paddingBottom:15,
    borderRadius:35,
    padding:28,
    justifyContent:'center'

    

  }
});

export default WelcomeScreen;
