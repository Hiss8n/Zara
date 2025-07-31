import { View, Text } from 'react-native'
import React from 'react'
import {Loader} from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <Loader size={34} color='#5b5757ff' onAnimationStart='animate-spin' />
    </View>
  )
}

export default LoadingSpinner