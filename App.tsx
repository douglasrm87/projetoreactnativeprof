import React from 'react';
// npx @react-native-community/cli@latest init projetoreactnativeprof
// npx   react-native   run-android
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import Login from './componentes/Login';
import { TelaVazia } from './componentes/TelaVazia';
import { TelaModal } from './componentes/TelaModal';
import { TelaTrocarSenha } from './componentes/TelaTrocarSenha';
import { TelaIdade } from './componentes/TelaIdade';
import { TelaPrincipalHomeScreen } from './componentes/bancodedados/TelaPrincipalHomeScreen';
import { TelaCadastro } from './componentes/bancodedados/TelaCadastro';
import { TelaConsulta } from './componentes/bancodedados/TelaConsulta';
import { TelaAtualizar } from './componentes/bancodedados/TelaAtualizar';
import { TelaExcluir } from './componentes/bancodedados/TelaExcluir';
import { TelaConsultarByID } from './componentes/bancodedados/TelaConsultarByID';
import AcessoAPI from './componentes/webservices/AcessoAPI';
import AcessoAPIDigitarCEP from './componentes/webservices/AcessoAPIDigitarCEP';
import LoginAutenticar from './loginavancado/autenticar/LoginAutenticar';
import CreateUser from './loginavancado/createUser/CreateUser';
import { TelaDatePicker } from './componentes/TelaDatePicker';
import { TelaTabScreenLayout } from './componentes/TelaTabScreenLayout';
import { TabDiretor } from './componentes/navagacaotab/TabDiretor';
import { TabGerente } from './componentes/navagacaotab/TabGerente';
import { TabFuncionario } from './componentes/navagacaotab/TabFuncionario';

// npx react-native start


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const [isSignedIn , setIsSignedIn ] = React.useState(false);
   
  return (
    <NavigationContainer> 
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TelaVazia" component={TelaVazia} />
        <Stack.Screen name="TelaModal" component={TelaModal} />
        <Stack.Screen name="TelaTrocarSenha" component={TelaTrocarSenha} />
        <Stack.Screen name="TelaIdade" component={TelaIdade} />
        <Stack.Screen name="TelaPrincipalHomeScreen" component={TelaPrincipalHomeScreen} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaConsulta" component={TelaConsulta} />
        <Stack.Screen name="TelaConsultarByID" component={TelaConsultarByID} />
        <Stack.Screen name="TelaAtualizar" component={TelaAtualizar} />
        <Stack.Screen name="TelaExcluir" component={TelaExcluir} />
        <Stack.Screen name="AcessoAPI" component={AcessoAPI} />
        <Stack.Screen name="AcessoAPIDigitarCEP" component={AcessoAPIDigitarCEP} />
        <Stack.Screen name="LoginAutenticar" component={LoginAutenticar} /> 
        <Stack.Screen name="CreateUser" component={CreateUser} /> 
        <Stack.Screen name="TelaDatePicker" component={TelaDatePicker} /> 
        <Stack.Screen name="TelaTabScreenLayout" component={TelaTabScreenLayout} /> 
        <Stack.Screen name="TabDiretor" component={TabDiretor} /> 
        <Stack.Screen name="TabGerente" component={TabGerente} /> 
        <Stack.Screen name="TabFuncionario" component={TabFuncionario} /> 
        
      </Stack.Navigator> 
      {/*<Tab.Navigator>
              
        <Stack.Screen name="TelaExcluir" component={TelaExcluir} />
        


        <Tab.Screen name="Second">
            {() => (
              <Tab.Navigator>
                <Tab.Screen name="Local" component={HomeScreen} />
              </Tab.Navigator>
            )}
          </Tab.Screen>
        
    </Tab.Navigator>
    */} 
    </NavigationContainer>

    
  );
}


export default App;
