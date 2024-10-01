import React from 'react'
import { Button, Image, Text, View } from 'react-native';
 


export const TelaCadastroProduto = ({navigation}) => {
    return (
        <View
            style={{
            flexDirection: 'row',
            height: 100,
            padding: 20
            }}
        >
        <View>
            <Image />
        </View>
       
        <View>
            <Text>Tela dedicada para quem esqueceu a senha.</Text>
            <Button
            title="Clique para continuar sua experiência."
                onPress={() =>
                navigation.navigate('TelaModal')
                }  
            />
        </View>
        </View>
    );         
}