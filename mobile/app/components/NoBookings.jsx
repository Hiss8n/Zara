import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React, { cloneElement } from 'react'
import { Ionicons } from '@expo/vector-icons'

const NoBookings = () => {
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#ececeeff',justifyContent:'center',alignItems:'center'}}>  
    <View style={{/*  backgroundColor:'#454c4e'  */}}>

      <View  style={styles.content}>
           <Ionicons name='clipboard-outline' size={54} color='#d8d0d0ff'/>
      </View>
      <Text style={styles.text}>No Bookings Available</Text>
     
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  content:{
    flexDirection:1,
    with:100,
    height:160,
   /*  flexDirection:'column' */
    //borderRadius:'50%',
    backgroundColor:'#afafb5ff',
    borderRadius:'50%',
    justifyContent:'center',
    alignItems:'center'

  },
  text:{
    color:'#2d2d2bff',
    fontSize:16,
    fontWeight:700
   /*  */  // fontWeight:600
  }
})

export default NoBookings;