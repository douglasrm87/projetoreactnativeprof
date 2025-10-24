import React from 'react'
import { Button, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabDiretor } from './navagacaotab/TabDiretor';
import { TabGerente } from './navagacaotab/TabGerente';
import { TabFuncionario } from './navagacaotab/TabFuncionario';



export const TelaTabScreenLayout = ({navigation}) => {
const Tab = createBottomTabNavigator();
    return (
        <View
            style={{
            flexDirection: 'row',
            height: 100,
            padding: 20
            }}
        >
         
        <View style={{ flex: 1 }}>


            <Tab.Navigator headerMode="none" initialRouteName="TabA">
                <Tab.Screen name="Diretor" component={TabDiretor} options={{
                tabBarLabel: "BotaoTabA"
                ,
                onPress: () => navigation.navigate('TabDiretor'),
                tabBarIcon: () => (
                    <Button
                        title="Diretor"
                        onPress={() => navigation.navigate('TabDiretor')}
                    />
                )
                
            }}/>
            <Tab.Screen name="Gerente" component={TabGerente} options={{
                tabBarLabel: "BotaoTabB"
                ,
                onPress: () => navigation.navigate('TabGerente'),
                tabBarIcon: () => (
                    <Button
                        title="Gerente"
                        onPress={() => navigation.navigate('TabGerente')}
                    />
                )
            }}/>
            <Tab.Screen name="Funcionario" component={TabFuncionario} options={{
                tabBarLabel: "BotaoTabC"
                 ,
                onPress: () => navigation.navigate('TabFuncionario'),
                tabBarIcon: () => (
                    <Button
                        title="Funcionario"
                        onPress={() => navigation.navigate('TabFuncionario')}
                    />
                )
            }}/>
            </Tab.Navigator>
         </View>
        </View>
    );         
}
