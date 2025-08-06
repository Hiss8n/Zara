import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SafeAreaContext from '../components/SafeAreaContext'
import NoBookings from '../components/NotBookings'
const HomeScreen = () => {

  const [isAvailable,setIsAvailable]=useState(true)
  return (
    <SafeAreaContext  style={{flex:1}}>

 
    <SafeAreaView style={{flex:1,backgroundColor:'#d7d6d6ff'}}>
      <View style={styles.container}>
        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'#1b7decff',fontSize:25,fontWeight:30}}>MEET UN / GOK STAFF {" "}📆</Text>
          <Text style={{fontSize:14,marginLeft:-28}}>Book one-on-one meeting with a staff</Text>
         
        </View>
        <NoBookings/>
        {
          isAvailable ? (
            <Text>Loading...</Text>
            
          ):(<View>
            <View> <Text>Kakuma Town</Text></View>
            <View> <Text>Field Post I </Text></View>
            <View> <Text>Field post II </Text></View>
            <View> <Text>Field post III</Text></View>
            <View> <Text>Kalobeyei</Text></View>
            </View>
          )

        }
        <View>

        </View>

       </View>
    </SafeAreaView>
     </SafeAreaContext>
  )
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f7f3f3ff',
    width:'100%',
    padding:12,
    marginBottom:12
   
  },




})

export default HomeScreen