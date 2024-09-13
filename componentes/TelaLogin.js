import type {Node} from 'react';

// https://reactnative.dev/docs/button.html
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

 
const funcaoOnPressTitle = () => {
    alert("Informar seu e-mail corporativo.");
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
 

const TelaLogin = ({iniciarJogo}) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.linkcontainer}>
            <Text   onPress={funcaoOnPressTitle}>
                Clique em mim: Usuário  
            </Text>
            <Text   onPress={funcaoOnPressTitle}>
                Clique em mim: Usuário  
            </Text>
            <Button
                onPress={funcaoOnPressTitle}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
             <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value="Nome:"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value="E-mail:"
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </SafeAreaView>
        </View>
        
        
    
    )
}

export default TelaLogin;
