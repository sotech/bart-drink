//Para el ingreso de una receta en particular
import React,{useState} from 'react';
import {Text,StyleSheet,View, TextInput, TouchableHighlight, Alert} from 'react-native';
import RecetasAPI from '../utils/RecetasAPI';


const RecetaScreen = () => {
  const [instrucciones, setInstrucciones]=useState('')
  const [ingredientes, setIngredientes]=useState('')
  const [titulo, setTitulo]=useState('')
  //Funcion para usar con el boton guardar
  const handleTituloChanged = (textoIngresado) => {
    //Actualizar el titulo state
    setTitulo(textoIngresado)
    
  }

  const handleIngredientesChanged = (textoIngresado) => {
    setIngredientes(textoIngresado)
    //Actualizar el Ingredientes state
  }

  const handleDescripcionChanged = (textoIngresado) => {
    //Actualizar el Descripcion state
    setInstrucciones(textoIngresado)
  }

  const handleGuardarPressed = async() => {
    const recetaData = "" //Obtener la data de los states
    await RecetasAPI.GuardarReceta(recetaData)
    alert('Receta guardada') //Cambiar luego este alert por un Toast
  }

  return(
    <View style={styles.container}>
      <Text style={styles.versionText}>Titulo</Text>
      <TextInput 
      autoCapitalize={'sentences'}
      autoFocus={true}
      maxLength={25}
      placeholder={'Ingrese titulo'}
      value={titulo}
      onChangeText={handleTituloChanged}
      style={styles.input}
      />
      <Text style={styles.versionText}>Ingredientes</Text>
      <TextInput 
      autoCapitalize={'sentences'}
      placeholder={'Ingrese ingredientes'}
      value={ingredientes}
      multiline 
      numberOfLines={8}
      onChangeText={handleIngredientesChanged}
      style={styles.inputXl}
      />
      <Text style={styles.versionText}>Instrucciones</Text>
      <TextInput 
      autoCapitalize={'sentences'}
      placeholder={'Ingrese instrucciones'}
      value={instrucciones}
      multiline 
      numberOfLines={20}
      onChangeText={handleDescripcionChanged}
      style={styles.inputXl}
      />
      <View style={styles.buttonContainer}>
      <TouchableHighlight
      onPress={()=>{
        alert(titulo)
      }}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: '5%',
  },
  input:{
    borderWidth:.5,
    fontSize: 15,
    padding: 10,
    margin:10,
    backgroundColor:'lightgray',
    color:'white'
  },
  inputXl:{
    borderWidth:.5,
    fontSize: 15,
    padding: 10,
    margin:10,
    height:100,
    backgroundColor:'lightgray',
    color:'white'
  },
  
  buttonContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  button:{
    backgroundColor:'black',
    padding:15,
    width:'30%',
    borderRadius:15,
    margin:10,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    textAlign:'center'
  },
  versionText:{
    fontSize:20,
  }
});

export default RecetaScreen