import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {Loader} from 'lucide-react'
import { Ionicons } from '@expo/vector-icons'

const NoBookings = () => {
  
  return (
    <View style={{flex:1}}>

      <View  style={styles.content}>
           <Ionicons size={34} color='#a59898ff'/>
      </View>
      <Text style={styles.text}>No Bookings Available</Text>
     
    </View>
  )
}

const styles=StyleSheet.create({
  content:{
    with:320,
    height:200,
    flexDirection:'column',
    borderRadius:'50%'

  },
  text:{
    color:'#e1e1dbff',
    fontSize:20,
    fontWeight:600
  }
})

export default NoBookings