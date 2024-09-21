import React from 'react'
import { Button } from 'react-native'

export const Homescreen =  ({navigation}) => {
  return (
    <Button
      title="Clique para Login"
      onPress={() =>
        navigation.navigate('Login')
      }  
    />
  )
}
export default  Homescreen;

