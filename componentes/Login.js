 
 

// Fonte de pesquisa: https://reactnative.dev/docs/button.html
// https://pt.stackoverflow.com/questions/582361/captura-de-textinput-em-react-native
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

 
function confereLogin(login, senha){
  const loginDefault = 'drm'
  const senhaDefault = '123'
  if(login == loginDefault && senha == senhaDefault){
    console.warn('Login Realizado!')
  }else{
     console.warn('Login Inválido!')
  }
}
function funcaoAjuda (){
  alert("Acessar o site https://reactnative.dev/docs/button.html.");
}
trocarsenhatop = (email, pass) => {
  alert('Atenção. Trocando sua senha: ' + email + '\nDigitado password: ' + pass)
}
const Login = ({estadoUsuario}) => {
    const funcaoOnPressTitle = () => {
     alert("Informar seu e-mail corporativo.");
    };
    const ToolTipoMinha   = () => {
       alert("Informar sua senha numerica de 6 digitos.");
    };
 
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(0);
    const funcaoEsqueciSenha = () => {
       alert("funcaoEsqueciSenha: " );
    }
    const funcaoTrocarSenha = () => {
      alert("funcaoTrocarSenha: " );
   }
    return (
      <View style={styles.container}>
          <Text style={styles.titleText} onPress={funcaoOnPressTitle}>
            Usuário  
          </Text>
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {setEmail}/>
          <Text style={styles.titleText} onPress={ToolTipoMinha}>
             Senha  
          </Text>
          <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                keyboardType="numeric"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                onChangeText = {setPassword}/>
                
          <TouchableOpacity
                style = {styles.button}
                onPress = {
                    () => {confereLogin(email, password)}
                }>
                <Text style = {styles.buttonContainer}> Confirmar Login </Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Button
              onPress={funcaoEsqueciSenha}
              title="Esqueci a senha"
              color="#841584"
            />
          </View>
          <View style={styles.alternativeLayoutButtonContainer}>
          <TouchableOpacity
                style = {styles.button}
                onPress = { () => {funcaoAjuda()}
                }>
                <Text style = {styles.buttonContainer}> Ajuda </Text>
          </TouchableOpacity>
          <TouchableOpacity
                style = {styles.button}
                onPress = { () => {funcaoTrocarSenha()} }>
                <Text style = {styles.buttonContainer}> Trocar Senha </Text>
          </TouchableOpacity>
      </View>
    </View>
    )
}
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
export default  Login;
