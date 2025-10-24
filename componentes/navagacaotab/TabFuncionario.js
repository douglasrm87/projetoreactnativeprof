import React from 'react'
import { Button, Image, Text, View, StyleSheet, Animated } from 'react-native';

export const TabFuncionario = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.warningContainer}>
                <Text style={styles.warningText}>⚠️ ATENÇÃO!</Text>
                <Text style={styles.warningMessage}>
                    Área restrita apenas para funcionários autorizados.
                    Acesso não autorizado é estritamente proibido.
                </Text>
            </View>
            
            <View style={styles.contentContainer}>
                <Text>Tela TabFuncionario.</Text>
            </View>
        </View>
    );         
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    warningContainer: {
        backgroundColor: '#ff6b6b',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        borderWidth: 2,
        borderColor: '#ff0000',
    },
    warningText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    warningMessage: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 24,
    },
    contentContainer: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    }
});                                                             
