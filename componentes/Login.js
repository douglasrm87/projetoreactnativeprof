import type {Node} from 'react';
import { Button, StyleSheet, View , TextInput,Text,TouchableOpacity } from 'react-native';
 
import React from 'react';
 

const funcaoOnPressTitle = () => {
    alert("Informar seu e-mail corporativo.");
};

const Login: () => Node = Platform.select({
 
  default: () => (
 
    <Text   onPress={funcaoOnPressTitle}>
        Clique em mim: Usuário  
    </Text>
    
  ),
});

export default Login;
