import type {Node} from 'react';

// Fonte de pesquisa: https://reactnative.dev/docs/button.html
// https://pt.stackoverflow.com/questions/582361/captura-de-textinput-em-react-native
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    baseText: {
        fontWeight: 'bold',
        color: 'red',
      },
  });
const TelaCadastro = ({estadoUsuario}) => {
 
    return (
        <View style={styles.linkcontainer}>
            <Text  style={styles.baseText}>
                Tela de Cadastro apos Login.
            </Text>
        </View>
    )
}

export default TelaCadastro;