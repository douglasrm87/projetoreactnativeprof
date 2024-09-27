import React from 'react'
import {StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
      borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
      margin: 20
    },
    input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      
    titleText: {
       fontSize: 40,
       fontWeight: "bold"
     },
     button: {
      alignItems: "center",
      margin: 20,
      borderradius:15,
      backgroundColor: "#DDDDDD",
      borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: 'hidden',
      padding: 10
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
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

