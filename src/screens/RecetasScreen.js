import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Receta from '../components/Receta';
import RecetasAPI from '../utils/RecetasAPI';
import Screens from '../utils/Screens';

const RecetasScreen = ({navigation}) => {
  const [recetas,setRecetas] = useState([]);

  useEffect(()=>{
    PopulateRecetas();
  },[])

  const PopulateRecetas = async() => {
    //const recetasData = await RecetasAPI.GetRecetas();
    const recetasData = [
      {
        titulo:'Cuba libre',
        ingredientes:['Coca-Cola','Ron'],
        descripcion:'Mezclar 3/1 Coca con Ron'
      },{
        titulo: 'Coctel azul',
        ingredientes: ['Curacao azul', 'Vodka', 'Sprite'],
        descripcion: '1oz curacao, media oz vodka, llenar con sprite'
      }
    ]
    setRecetas(recetasData);
  }

  const addRecipeToList = (recetaNueva) =>{
    setRecetas(prevRecetas =>{
      prevRecetas.push(recetaNueva);
      return prevRecetas;
    })
  }

  const handleAgregarReceta = async() => {
    navigation.navigate(Screens.RECETA)
  }

  return(
    <View style={styles.container}>
      <View style={styles.recetasContainer}>
        <ScrollView style={styles.recetasScrollContainer}>
          {recetas.map(r => {
            return <Receta 
            key={r.titulo} 
            titulo={r.titulo} 
            ingredientes={r.ingredientes}
            descripcion={r.descripcion}
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
    marginHorizontal: '5%',
  },
  recetasContainer:{
    flex:2,
    marginHorizontal:'5%',
  },
  recetasScrollContainer:{
    flex:1,
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