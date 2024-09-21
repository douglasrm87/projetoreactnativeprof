/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * C:\Desenvolvimemto\Fontes\ReactNativeAndroid\projetoreactnativeprof\node_modules\react-native\Libraries\NewAppScreen\components
 * @format
 * https://reactnative.dev/docs/button.html
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './componentes/Login';
import TelaLogin from './componentes/TelaLogin';
import TelaCadastro from './componentes/TelaCadastro';
import TelaNavegacao from './componentes/TelaNavegacao';
 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
   
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage" 
          component={FirstPage}
          options={{
            title: 'Primeira Tela',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Segunda Tela',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
