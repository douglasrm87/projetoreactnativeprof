// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to delete the user
import React, { useState } from 'react';
import { Text, View, Alert, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import EntradaDadosGenerico03 from './EntradaDadosGenerico03';
import BotaoGenericoMyButton01 from './BotaoGenericoMyButton01';
var db = openDatabase({ name: 'UserDatabase.db' });


export const TelaExcluir = ({navigation}) => {
    let [inputUserId, setInputUserId] = useState('');
    let deleteUser = () => {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM  table_user where user_id=?', [inputUserId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                        Alert.alert('Success','Usuário deletado com sucesso.',[{
                            text: 'Ok',
                            onPress: () => navigation.navigate('TelaPrincipalHomeScreen'),
                            },],  { cancelable: false }
                        );
                    } else {
                        alert('Please insert a valid User Id');
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
                <BotaoGenericoMyButton01 title="Deletar" customClick={deleteUser} />
            </View>
            <Text  style={{ fontSize: 16, textAlign: 'center',  color: 'black'  }}>
            https://github.com/douglasrm87 </Text>
        </View>
    </SafeAreaView>
    );         
}
