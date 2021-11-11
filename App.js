import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import HomeScreen from './src/screens/HomeScreen';
import RecetasScreen from './src/screens/RecetasScreen';
import RecetaScreen from './src/screens/RecetaScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recetas" component={RecetasScreen} />
        <Stack.Screen name="Receta" component={RecetaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;