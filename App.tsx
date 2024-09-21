import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import Login from './componentes/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const [isSignedIn , setIsSignedIn ] = React.useState(false);
   
  return (
    <NavigationContainer> 
         
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> 
      {/*<Tab.Navigator>
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
