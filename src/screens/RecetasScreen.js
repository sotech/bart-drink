import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Receta from '../components/Receta';
import RecetasAPI from '../utils/RecetasAPI';

const RecetasScreen = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [recetas,setRecetas] = useState([]);

  useEffect(()=>{
    PopulateRecetas();
  },[])

  const PopulateRecetas = async() => {
    const recetasData = await RecetasAPI.GetRecetas();
    setRecetas(recetasData);
  }

  const handleNombreChange = (v) => {
    setNombre(v);
  }

  const handleDescripcionChange = (v) => {
    setDescripcion(v);
  }

  const handleShowData = async() => {
    const recetas = await RecetasAPI.GetRecetas();
    console.log(recetas);
  }

  const AddRecipeToList = (recetaNueva) =>{
    setRecetas(prevRecetas =>{
      prevRecetas.push(recetaNueva);
      return prevRecetas;
    })
  }
  const handleSubmit = async() => {
    AddRecipeToList({nombre,descripcion});
    await RecetasAPI.SaveRecetas(recetas);
    console.log('Data saved!');
    ResetFields();
  }

  const ResetFields = () => {
    setNombre('');
    setDescripcion('');
  }

  const handleClearData = async() =>{
    await RecetasAPI.ClearRecetas();
    PopulateRecetas();
  }

  return(
    <View style={styles.container}>
      <ScrollView
      style={styles.recetasContainer}>
        {recetas.map(receta => {
          return <Receta key={receta.nombre} nombre={receta.nombre} descripcion={receta.descripcion} />
        })}
      </ScrollView>
      <View style={styles.menuContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={nombre}
            style={styles.input}
            placeholder={'Nombre'}
            onChangeText = {handleNombreChange}
          />
          <TextInput
            value={descripcion}
            style={styles.input}
            multiline={true}
            placeholder={'Descripcion'}
            onChangeText={handleDescripcionChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSubmit}  
            style={styles.button}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
          {/*
          <TouchableOpacity
            onPress={handleShowData}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Mostrar</Text>
          </TouchableOpacity>
          */}
          <TouchableOpacity
            onPress={handleClearData}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Limpiar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    borderWidth:1,
    fontSize: 20,
    padding: 10,
    margin:5,
    backgroundColor:'lightgray',
    color:'white'
  },
  menuContainer:{
    flex:1,
    justifyContent:'center',
  },
  recetasContainer:{
    flex:1,
    marginHorizontal:'5%',
  },
  inputContainer:{
    marginVertical:20,
  },
  button:{
    padding:20,
    marginHorizontal:30,
    marginVertical:5,
    backgroundColor:'black',
    alignItems:'center'
  },
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
  }
})
export default RecetasScreen;