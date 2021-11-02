//Para el ingreso de una receta en particular
import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import RecetasAPI from '../utils/RecetasAPI';


const RecetaScreen = () => {

  //Funcion para usar con el boton guardar
  const handleTituloChanged = () => {
    //Actualizar el titulo state
  }

  const handleIngredientesChanged = () => {
    //Actualizar el Ingredientes state
  }

  const handleDescripcionChanged = () => {
    //Actualizar el Descripcion state
  }

  const handleGuardarPressed = async() => {
    const recetaData = "" //Obtener la data de los states
    await RecetasAPI.GuardarReceta(recetaData)
    alert('Receta guardada') //Cambiar luego este alert por un Toast
  }

  return(
    <View>
      <Text>Receta Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default RecetaScreen