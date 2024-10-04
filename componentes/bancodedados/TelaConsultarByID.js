// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user
import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import EntradaDadosGenerico03 from './EntradaDadosGenerico03';
import BotaoGenericoMyButton01 from './BotaoGenericoMyButton01';
var db = openDatabase({ name: 'UserDatabase.db' });

export const TelaConsultarByID = ({navigation}) => {
    let [inputUserId, setInputUserId] = useState('');
    let [userData, setUserData] = useState({});

    let searchUser = () => {
        console.log(inputUserId);
        setUserData({});
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [inputUserId],   (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        setUserData(results.rows.item(0));
                    } else {
                        alert('No user found');
                    }
                }
            );
        });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <EntradaDadosGenerico03
                        placeholder="Enter User Id"
                        onChangeText={
                            (inputUserId) => setInputUserId(inputUserId)
                        }
                        style={{ padding: 10 }}
                    />

                    <BotaoGenericoMyButton01 title="Search User" customClick={searchUser} />
                    <View style={{
                            marginLeft: 35,
                            marginRight: 35,
                            marginTop: 10   }}>
                        <Text>User Id: {userData.user_id}</Text>
                        <Text>User Name: {userData.user_name}</Text>
                        <Text>User Contact: {userData.user_contact}</Text>
                        <Text>User Address: {userData.user_address}</Text>
                    </View>
                </View>
                <Text  style={{ fontSize: 16, textAlign: 'center',  color: 'black'  }}>
                https://github.com/douglasrm87 </Text>
            </View>
        </SafeAreaView>
    );         
}
