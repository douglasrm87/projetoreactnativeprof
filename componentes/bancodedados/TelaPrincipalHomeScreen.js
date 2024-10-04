 
// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import TextoGenericoMyText02 from './TextoGenericoMyText02';
import BotaoGenericoMyButton01 from './BotaoGenericoMyButton01';
var db = openDatabase({ name: 'UserDatabase.db' });
export const TelaPrincipalHomeScreen = ({navigation}) => {
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",[],
                function (tx, res) {
                    console.log('Acompanhe o Debug - LOG:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',[] );
                        }
                    }
                );
            });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                 <View style={{ flex: 1 }}>
                    <TextoGenericoMyText02 text="Examplo do uso de Banco de dadose" />
                    <BotaoGenericoMyButton01 title="Cadastrar"  customClick={() => navigation.navigate('TelaCadastro')} />
                    <BotaoGenericoMyButton01 title="Selecionar Todos"  customClick={() => navigation.navigate('TelaConsulta')}  />
                    <BotaoGenericoMyButton01 title="Atualizar" customClick={() => navigation.navigate('TelaAtualizar')} />
                    <BotaoGenericoMyButton01 title="Selecionar"  customClick={() => navigation.navigate('TelaConsultarByID')}  />
                    <BotaoGenericoMyButton01 title="Delete"  customClick={() => navigation.navigate('TelaExcluir')} />
                 </View>
                 <Text  style={{ fontSize: 16, textAlign: 'center',  color: 'black'  }}>
                 https://github.com/douglasrm87 </Text>
            </View>
        </SafeAreaView>
    );         
}
