import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import Receta from '../components/Receta';
import RecetasAPI from '../utils/RecetasAPI';
import Screens from '../utils/Screens';

const RecetasScreen = ({ navigation }) => {
  const [recetas, setRecetas] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      PopulateRecetas();
    }, [])
  );

  const PopulateRecetas = async () => {
    const recetasData = await RecetasAPI.ObtenerRecetas()
    setRecetas(recetasData);
  }

  const handleAgregarReceta = async () => {
    navigation.navigate(Screens.RECETA)
  }

  const handleDelete = async (key) => {
    const newRecetas = recetas.filter(receta => receta.titulo !== key);
    await RecetasAPI.GuardarRecetas(newRecetas);
    setRecetas(await RecetasAPI.ObtenerRecetas());
    //Comentar el toast si se trabaja en la version web, sino la app crashea
    ToastAndroid.show(`${key} borrado exitosamente.`, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <View style={styles.recetasContainer}>
        <ScrollView style={styles.recetasScrollContainer}>
          {recetas.map(r => {
            return <Receta
              key={r.id}
              titulo={r.titulo}
              ingredientes={r.ingredientes}
              instrucciones={r.instrucciones}
              borrar={handleDelete}
            />
          })}
        </ScrollView>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleAgregarReceta}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Agregar Receta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  recetasContainer: {
    flex: 2,
    marginHorizontal: '5%',
  },
  button: {
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
export default RecetasScreen;