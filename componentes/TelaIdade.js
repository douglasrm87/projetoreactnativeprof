
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text,TextInput,TouchableOpacity, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@save_age'
//Exercício
const STORAGE_KEY_NOME = '@save_nome'

export const TelaIdade = ({navigation}) => {
    const [age, setAge] = useState('')
    // Exercício
    const [nome, setNome] = useState('')
    const onChangeTextNome = userNome => setNome(userNome)
    // Fim exercício
    const onChangeText = userAge => setAge(userAge)
    useEffect(() => {
      readData()
    }, [])
    const saveData = async () => {
        try {
             await AsyncStorage.setItem(STORAGE_KEY, age)
             // Exercício
             await AsyncStorage.setItem(STORAGE_KEY_NOME, nome)
             alert('Dados salvos com sucesso.')
        } catch (e) {
             alert('Falha ao salvar dados no arquivo.')
        }
     }
     const readData = async () => {
        try {
            const userAge = await AsyncStorage.getItem(STORAGE_KEY)
            // Exercício
            const userNome = await AsyncStorage.getItem(STORAGE_KEY_NOME)
            if (userNome !== null) {
                setNome(userNome)
            }
            // FIM exercício
            if (userAge !== null) {
                setAge(userAge)
            }

            
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            setAge('')
            //Exercício
            setNome ('')
            alert('Banco de Dados foi zerado..')
        } catch (e) {
            alert('Failed  to clear the async storage.')
        }
    }
    const onSubmitEditing = () => {
        if (!age)
            return
        saveData(age,nome)
        setAge('')
        setNome('')
    }
    return (
        <View style={styles.container}>
       
            <View style={styles.header}>
                 <Text style={styles.title}>Gravar localmente - Arquivo</Text>
            </View>
            <View style={styles.panel}>
                <Text>Digite sua idade:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    placeholder="Digitar somente números."
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                />

                {/* Exercício*/}
                <Text>Digite seu nome:</Text>
                <TextInput
                  style={styles.input}
                  value={nome}
                  placeholder="Digitar seu nome e sobrenome."
                  onChangeText={onChangeTextNome}
                  onSubmitEditing={onSubmitEditing}
                />
                {/* Fim Exercício*/}
                <Text style={styles.text}>Sua idade:{age} </Text>
                <Text style={styles.text}>Seu nome:{nome}</Text>
                <TouchableOpacity onPress={onSubmitEditing} style={styles.button}>
                    <Text style={styles.buttonText}>Gravar Dados</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={readData} style={styles.button}>
                    <Text style={styles.buttonText}>Ler Dados</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearStorage} style={styles.button}>
                    <Text style={styles.buttonText}>Limpar Banco de Dados</Text>
                </TouchableOpacity>
            </View>
        </View>
    );         
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        padding: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: 'center'
    },

    title: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold'
    },

    panel: {
        paddingTop: 40,
        alignItems: 'center'
    },

    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },

    input: {
        padding: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10
    },

    button: {
        margin: 10,
        padding: 10,
        backgroundColor: 'yellow'
    },

    buttonText: {
        fontSize: 18,
        color: '#444'
    }

})
