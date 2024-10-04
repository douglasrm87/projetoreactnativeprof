// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, { useState } from 'react';
import {
        View,
        ScrollView,
        KeyboardAvoidingView,
        Alert,
        SafeAreaView,
        Text,
        } from 'react-native';
import EntradaDadosGenerico03 from './EntradaDadosGenerico03';
import BotaoGenericoMyButton01 from './BotaoGenericoMyButton01';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
export const TelaCadastro = ({navigation}) => {

    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let register_user = () => {
        console.log(userName, userContact, userAddress);
        if (!userName) {
            alert('Please fill name');
            return;
        }
        if (!userContact) {
            alert('Please fill Contact Number');
            return;
        }
        if (!userAddress) {
            alert('Please fill Address');
            return;
        }
    
        db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)', [userName, userContact, userAddress],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Sucesso',  'Dados gravados corretamente.',
                            [ {
                                text: 'Ok',
                                onPress: () => navigation.navigate('TelaPrincipalHomeScreen'),
                            }, ], { cancelable: false }
                        );
                    } else alert('Registration Failed');
                }  );
        });
    };        
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView
                            behavior="padding"
                            style={{ flex: 1, justifyContent: 'space-between' }}>

                            <EntradaDadosGenerico03 placeholder="Digitar o nome"  
                                onChangeText={
                                    (userName) => setUserName(userName)
                                }
                                style={{ padding: 10 }}
                            />
                            <EntradaDadosGenerico03 placeholder="Digitar o Telefone"
                                onChangeText={
                                    (userContact) => setUserContact(userContact)
                                }
                                maxLength={10}
                                keyboardType="numeric"
                                style={{ padding: 10 }}
                            />

                            <EntradaDadosGenerico03  placeholder="Digitar o Endereço"
                                onChangeText={
                                    (userAddress) => setUserAddress(userAddress)
                                }
                                maxLength={225}
                                numberOfLines={5}
                                multiline={true}
                                style={{ textAlignVertical: 'top', padding: 10 }}
                            />
                            <BotaoGenericoMyButton01 title="Enviar" customClick={register_user} />
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View> 
                <Text  style={{ fontSize: 16, textAlign: 'center',  color: 'black'  }}>
                 https://github.com/douglasrm87 </Text>
            </View>
        </SafeAreaView>
    );         
}
