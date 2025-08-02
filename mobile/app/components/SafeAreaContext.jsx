import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const SafeAreaContext = ({children}) => {

    const inset=useSafeAreaInsets()
  return (
    <SafeAreaView style={{paddingTop:inset.top}}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaContext 