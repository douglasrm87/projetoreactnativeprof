// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to update the user

import React, { useState } from 'react';
import {
        View,
        ScrollView,
        KeyboardAvoidingView,
        Alert,
        SafeAreaView,
        Text,
        } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
import EntradaDadosGenerico03 from './EntradaDadosGenerico03';
import BotaoGenericoMyButton01 from './BotaoGenericoMyButton01';
var db = openDatabase({ name: 'UserDatabase.db' });
export const TelaAtualizar = ({navigation}) => {
    let [inputUserId, setInputUserId] = useState('');
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let updateAllStates = (name, contact, address) => {
        setUserName(name);
        setUserContact(contact);
        setUserAddress(address);
    };

    let searchUser = () => {
        console.log(inputUserId);
        db.transaction((tx) => {
            tx.executeSql(
                 'SELECT * FROM table_user where user_id = ?',   [inputUserId],
                 (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        let res = results.rows.item(0);
                        updateAllStates(
                            res.user_name,
                            res.user_contact,
                            res.user_address
                        );
                     } else {
                        alert('No user found');
                        updateAllStates('', '', '');
                    }
                }
            );
        });
    };
    let updateUser = () => {
        console.log(inputUserId, userName, userContact, userAddress);
        if (!inputUserId) {
            alert('Please fill User id');
            return;
        }
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
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
                [userName, userContact, userAddress, inputUserId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert(  'Success',    'User updated successfully',
                            [ {
                                text: 'Ok',
                                onPress: () => navigation.navigate('TelaPrincipalHomeScreen'),
                            }, ],{ cancelable: false }
                        );
                    } else 
                        alert('Updation Failed');
                }
            );
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-between' }}>
                            <EntradaDadosGenerico03
                                placeholder="Enter User Id"
                                style={{ padding: 10 }}
                                    onChangeText={
                                        (inputUserId) => setInputUserId(inputUserId)
                                    }
                                />
                                <BotaoGenericoMyButton01
                                    title="Search User"
                                    customClick={searchUser}
                                />
                                <EntradaDadosGenerico03
                                    placeholder="Enter Name"
                                    value={userName}
                                    style={{ padding: 10 }}
                                    onChangeText={
                                    (userName) => setUserName(userName)
                                    }
                                />
                                <EntradaDadosGenerico03
                                    placeholder="Enter Contact No"
                                    value={'' + userContact}
                                    onChangeText={
                                        (userContact) => setUserContact(userContact)
                                    }
                                    maxLength={10}
                                    style={{ padding: 10 }}
                                    keyboardType="numeric"
                                />

                                <EntradaDadosGenerico03
                                    value={userAddress}
                                    placeholder="Enter Address"
                                    onChangeText={
                                    (userAddress) => setUserAddress(userAddress)
                                    }
                                    maxLength={225}
                                    numberOfLines={5}
                                    multiline={true}
                                    style={{ textAlignVertical: 'top', padding: 10 }}
                                />
                                <BotaoGenericoMyButton01
                                    title="Atualizar"
                                    customClick={updateUser}
                                />

                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
                <Text  style={{ fontSize: 16, textAlign: 'center',  color: 'black'  }}>
                https://github.com/douglasrm87 </Text>
            </View>
        </SafeAreaView>
    );         
}
