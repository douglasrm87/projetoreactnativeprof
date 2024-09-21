import React, {useState} from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 TextInput,
 Button,
} from 'react-native';


export const FirstPage =  ({navigation}) => {
    const [userName, setUserName] = useState('DeveloperPlus');
 return (
  <SafeAreaView style={{flex: 1}}>
   <View style={styles.container}>
    <Text style={styles.heading}>
     Passar Valor com React Navigation
    </Text>
    <Text style={styles.textStyle}>
     Insira seu nome para passá-lo para a Segunda Tela
    </Text>
    <TextInput
     value={userName}
     onChangeText={(username) => setUserName(username)}
     placeholder={'Insira qualquer valor'}
     style={styles.inputStyle}
    />
   
    <Button
     title="Próxima Tela"
     onPress={() =>
      navigation.navigate('SecondPage', {
       paramKey: userName,
      })
     }
    />
   </View>
  </SafeAreaView>
 );

}
 
const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  padding: 20,
 },
 heading: {
  fontSize: 25,
  textAlign: 'center',
  marginVertical: 10,
 },
 textStyle: {
  textAlign: 'center',
  fontSize: 18,
  marginVertical: 10,
 },
 inputStyle: {
  width: '80%',
  height: 44,
  padding: 10,
  marginVertical: 10,
  backgroundColor: '#DBDBD6',
 },
});
export default  FirstPage;
