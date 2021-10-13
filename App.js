import * as React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecetasScreen from './src/screens/RecetasScreen';
import IngredientesScreen from './src/screens/IngredientesScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recetas" component={RecetasScreen} />
        <Stack.Screen name="Ingredientes" component={IngredientesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;