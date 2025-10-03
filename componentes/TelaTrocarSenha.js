import React from 'react'
import {StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
      titleText: {
          fontSize: 40,
          fontWeight: "bold"
      },
      Image: {
          width: 108,
          height: 108,
      }
  });
export const TelaTrocarSenha = ({navigation}) => {
    
    return (
        <View>
            <Text style={styles.titleText}  >
             Tela dedicada para trocar sua senha  
            </Text>
           
        </View>
    );
    
}

