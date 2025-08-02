import { SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const SafeAreaContext = ({children}) => {

    const inset=useSafeAreaInsets()
  return (
    <SafeAreaView style={[styles.safeArea, {paddingTop:inset.top}]}>
      {children}
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  safeArea:{
    flex:1
  }
})

export default SafeAreaContext 