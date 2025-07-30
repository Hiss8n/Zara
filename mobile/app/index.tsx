import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#730bd4ff'
      }}
    >
      <Text style={{color:'white',fontSize:32,fontFamily:'sans-serif',fontWeight:800,textShadowColor:'#7b7b72ff'}}><Text style={{fontFamily:'poppins',color:'#77ef16ff',fontSize:90}}>Z</Text>ara</Text>
    </View>
  );
}
