//Para el ingreso de una receta en particular
import React,{useState} from 'react';
import {Text,StyleSheet,View, TextInput, TouchableHighlight, ToastAndroid} from 'react-native';
import RecetasAPI from '../utils/RecetasAPI';


const RecetaScreen = () => {
  const [instrucciones, setInstrucciones]=useState('')
  const [ingredientes, setIngredientes]=useState('')
  const [ingredientesRequerido, setIngredientesRequerido] = useState(false)
  const [titulo, setTitulo]=useState('')
  const [tituloRequerido, setTituloRequerido] = useState(false)
  //Funcion para usar con el boton guardar
  const handleTituloChanged = (textoIngresado) => {
    //Actualizar el titulo state
    setTitulo(textoIngresado)
    
  }

  const showToast = () => {
    ToastAndroid.show("Guardado!", ToastAndroid.SHORT); 
  };

  const handleIngredientesChanged = (textoIngresado) => {
    setIngredientes(textoIngresado)
    //Actualizar el Ingredientes state
  }

  const handleDescripcionChanged = (textoIngresado) => {
    //Actualizar el Descripcion state
    setInstrucciones(textoIngresado)
  }

  const handleGuardarPressed = async() => {
    const recetaData ={
      titulo:titulo,
      ingredientes:ingredientes,
      instrucciones:instrucciones,
    }  //Obtener la data de los states
    //Verificar que haya titulo e ingredientes
    let faltanCampos = false
    if(titulo == ''){
      setTituloRequerido(true)
      faltanCampos = true
    }else{
      setTituloRequerido(false)
    }
    if(ingredientes == ''){
      setIngredientesRequerido(true)
      faltanCampos = true
    }else{
      setIngredientesRequerido(false)
    }
    if(faltanCampos){
      alert('Faltan campos por completar')
      return
    }
    await RecetasAPI.GuardarReceta(recetaData)
    reiniciarCampos()
    showToast()
     //Cambiar luego este alert por un Toast
  }

  const reiniciarCampos=()=>{
    setTitulo('')
    setIngredientes('')
    setInstrucciones('')
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
      {tituloRequerido &&
        <Text style={styles.warning}>Debe ingresar un titulo</Text>
      }
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
      onChangeText={handleDescripcionChanged}
      style={styles.inputXl}
      />
      <View style={styles.buttonContainer}>
      <TouchableHighlight
      onPress={handleGuardarPressed}
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
    color:'black'
  },
  warning:{
    color:'red'
  },  
  inputXl:{
    borderWidth:.5,
    fontSize: 15,
    padding: 10,
    margin:10,
    height:100,
    backgroundColor:'lightgray',
    color:'black'
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