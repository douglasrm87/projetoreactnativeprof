import React from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'

 

export const Homescreen =  ({navigation}) => {
  return (
 
      <View>
          <Button
            title="Clique para Login"
            onPress={() =>
              navigation.navigate('Login')
            }  
          />
         <Image  source={require('../loginavancado/imagens//user-blue.png')} style={styles.Image} />
        <Button
            title="Clique para Login Avançado"
            onPress={() =>
              navigation.navigate('LoginAutenticar')
            }  
          />
      </View>
  )
}
export default  Homescreen;

export const styles = StyleSheet.create({
 
  Image: {
      width: 108,
      height: 108,
  }
})