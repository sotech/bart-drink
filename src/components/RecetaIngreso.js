import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, ToastAndroid, Image, ScrollView } from 'react-native';
import RecetasAPI from '../utils/RecetasAPI';
import uuid from 'react-native-uuid';
import { Entypo } from '@expo/vector-icons';
import FotoPreview from '../components/FotoPreview'

const RecetaIngreso = ({
  titulo,
  onTituloChanged,
  ingredientes,
  onIngredientesChanged,
  instrucciones,
  onDescripcionChanged,
  foto, 
  handleAfterGuardar, 
  handleCamara,
  handleDeleteFoto
  }) => {
  //Mensajes para las validaciones
  const [ingredientesRequerido, setIngredientesRequerido] = useState(false)
  const [tituloRequerido, setTituloRequerido] = useState(false)
  const [tituloExistente, setTituloExistente] = useState(false)

  const handleGuardarPressed = async () => {
    const valido = await validarCampos()
    if (!valido)
      return;

    const recetaData = {
      titulo: titulo,
      ingredientes: ingredientes,
      instrucciones: instrucciones,
      id: uuid.v4(),
      foto: foto?.uri || null
    }
    await RecetasAPI.GuardarReceta(recetaData)
    handleAfterGuardar()
    showGuardadoToast()
  }

  const validarCampos = async () => {
    const tituloValido = await validarTitulo()
    const ingredientesValido = validarIngredientes()
    const valido = tituloValido && ingredientesValido
    if (!valido) {
      ToastAndroid.show('Faltan campos por completar', ToastAndroid.SHORT)
      //console.log('Faltan campos por completar')
    }
    return valido
  }

  const validarTitulo = async () => {
    setTituloRequerido(false)
    setTituloExistente(false)
    let valido = true;
    if (titulo == '') {
      setTituloRequerido(true)
      valido = false
    } else {
      //Hay titulo. Verificar que el titulo no exista
      if (await RecetasAPI.ExisteReceta(titulo)) {
        setTituloExistente(true)
        valido = false
      }
    }
    return valido
  }

  const validarIngredientes = () => {
    setIngredientesRequerido(false)
    let valido = true
    if (ingredientes == '') {
      setIngredientesRequerido(true)
      valido = false
    }
    return valido
  }

  const showGuardadoToast = () => {
    ToastAndroid.show("¡Guardado!", ToastAndroid.SHORT);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.versionText}>Titulo</Text>
      <TextInput
        autoFocus={true}
        maxLength={25}
        placeholder={'Ingrese titulo'}
        value={titulo}
        onChangeText={onTituloChanged}
        style={styles.input}
      />
      {tituloRequerido &&
        <Text style={styles.warning}>Debe ingresar un titulo</Text>
      }
      {tituloExistente &&
        <Text style={styles.warning}>Ya existe una receta con ese nombre</Text>
      }
      <Text style={styles.versionText}>Ingredientes</Text>
      <TextInput
        autoCapitalize={'sentences'}
        placeholder={'Ingrese ingredientes'}
        value={ingredientes}
        multiline
        numberOfLines={8}
        onChangeText={onIngredientesChanged}
        style={styles.inputXl}
      />
      {ingredientesRequerido &&
        <Text style={styles.warning}>Debe ingresar ingredientes</Text>
      }
      <Text style={styles.versionText}>Instrucciones</Text>
      <TextInput
        autoCapitalize={'sentences'}
        placeholder={'Ingrese instrucciones'}
        value={instrucciones}
        multiline
        numberOfLines={20}
        onChangeText={onDescripcionChanged}
        style={styles.inputXl}
      />
      {foto && <FotoPreview foto={foto} onDelete={handleDeleteFoto}/>}
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          onPress={handleGuardarPressed}
          style={styles.touchableButton}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Guardar</Text>
            <Entypo name="save" size={24} color="white" />
          </View>

        </TouchableHighlight>
        <TouchableHighlight
          onPress={handleCamara}
          style={styles.touchableButton}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Camara</Text>
            <Entypo name="camera" size={24} color="white" />
          </View>
          
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
    padding:5,
  },
  input: {
    borderWidth: .5,
    fontSize: 15,
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgray',
    color: 'black'
  },
  warning: {
    color: 'red',
    marginVertical: 5,
  },
  inputXl: {
    borderWidth: .5,
    fontSize: 15,
    padding: 10,
    margin: 10,
    height: 100,
    backgroundColor: 'lightgray',
    color: 'black',
    textAlignVertical: 'top'
  },
  touchableButton:{
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    padding: 15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginRight:5,
  },
  versionText: {
    fontSize: 20,
  }
});

export default RecetaIngreso