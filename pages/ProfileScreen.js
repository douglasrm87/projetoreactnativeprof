import React from 'react'
import { Button } from 'react-native'

export const ProfileScreen =  ({navigation}) => {
  return (
    <Button
      title="Realizar Login"
      onPress={() =>
        navigation.navigate('SecondPage')
      }
    />
  )
}
export default  ProfileScreen;

