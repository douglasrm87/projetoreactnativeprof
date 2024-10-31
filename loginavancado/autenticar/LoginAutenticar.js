import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';

export default function LoginAutenticar({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function validarLogin(){
        console.log ("Validando o login.")
        if(email && senha !== ''  && senha === "123"){
            alert('Logado com sucesso. Seguindo frente, oooooo')
            navigation.navigate('Login')
        }else {
            alert('Ops! login falhou.')
        }
    }
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
            <View style={styles.Container}>
                <View style={styles.UserImage} >
                    <Image source={require('../imagens/user-blue.png')}
                    style={styles.Image}  />
                </View>
                <View style={styles.form} >
                    <TextInput style={styles.inputEmail} placeholder='Email'
                    autoCompleteType= 'email' autoCapitalize='none'
                    placeholderTextColor='#000' onChangeText={(event) => setEmail(event)}    />
                    <TextInput style={styles.inputPassword} placeholder='Senha'
                    autoCompleteType='password' autoCapitalize='none' autoCorrect={true}
                    placeholderTextColor='#000' onChangeText={(event) => setSenha(event)}/>
                    <TouchableOpacity 
                        onPress={validarLogin} 
                        style={styles.buttonForm} >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateUser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}