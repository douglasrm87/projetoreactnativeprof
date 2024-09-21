import type {Node} from 'react';

// Fonte de pesquisa: https://reactnative.dev/docs/button.html
// https://pt.stackoverflow.com/questions/582361/captura-de-textinput-em-react-native
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import {  TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
function confereLogin(login, senha){
    
    const loginDefault = 'drm'
    const senhaDefault = '123'

    if(login == loginDefault && senha == senhaDefault){
      console.warn('Login Realizado!')
    }else{
       console.warn('Login Inválido!')
    }
}
const funcaoDuvidas = ( ) => {
    alert("Informar seu nome e senha numérica registradas.");
 
};
 
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
 
const TelaLogin  =  ({navigation}) => {
    const [login, setLogin] = React.useState('');
    const [senha, setSenha] = React.useState(0);
  
   
    return (
        <View style={styles.linkcontainer}>
            <Text   onPress={funcaoDuvidas} style={styles.baseText}>
                Clique  aqui  para suas dúvidas. 
            </Text>

             <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setLogin}
                    value={login}
                    placeholder='Login'
                    keyboardType="default"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                    keyboardType="numeric"
                />
            </SafeAreaView>
            <Button
                title="Confirmar"
                onPress={() => {
                    confereLogin(login, senha)
            }}/>
            <View>
                <TouchableOpacity  >
                    <Text style={{ backgroundColor: "#E02041" }}>Go to second page</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default TelaLogin;
