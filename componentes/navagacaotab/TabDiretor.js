import React from 'react'

import { Button, Image, Text, View, StyleSheet, Animated } from 'react-native';


export const TabDiretor = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.warningContainer}>
                <Text style={styles.warningText}>� Área Executiva</Text>
                <Text style={styles.warningMessage}>
                    Portal exclusivo da Diretoria e Presidência.
                    Dashboard executivo com KPIs corporativos,
                    análises estratégicas e decisões do board.
                </Text>
                <Text style={styles.confidentialText}>
                    CONFIDENCIAL - ACESSO RESTRITO
                </Text>
            </View>
            
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>Painel Executivo</Text>
            </View>
        </View>
    );         
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1a1a1a',
    },
    warningContainer: {
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.45,
        shadowRadius: 7,
        elevation: 12,
        borderWidth: 1,
        borderColor: '#DAA520',
        backgroundColor: '#2C3E50',
        backgroundImage: 'linear-gradient(135deg, #2C3E50, #000000)',
    },
    warningText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#DAA520',
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.85)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        letterSpacing: 2,
        textTransform: 'uppercase'
    },
    warningMessage: {
        fontSize: 17,
        color: '#E5E4E2',
        textAlign: 'center',
        lineHeight: 26,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 3,
        marginBottom: 20
    },
    confidentialText: {
        color: '#DAA520',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 3,
        textTransform: 'uppercase',
        borderTopWidth: 1,
        borderTopColor: '#DAA520',
        paddingTop: 15,
        marginTop: 15
    },
    contentContainer: {
        padding: 20,
        backgroundColor: '#2C3E50',
        borderRadius: 12,
        borderColor: '#DAA520',
        borderWidth: 1,
        shadowColor: "#DAA520",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8
    },
    contentText: {
        color: '#E5E4E2',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    }
});   