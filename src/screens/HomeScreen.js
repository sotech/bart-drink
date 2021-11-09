import React,{useState} from 'react';
import Screens from '../utils/Screens';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Utilities from '../utils/Utilities'
import RecetasAPI from '../utils/RecetasAPI';
import RecetaModal from '../components/RecetaModal';

function HomeScreen({navigation}) {
  const versionActual = Utilities.GetVersionActual();
  const [recetaRandom, setRecetaRandom] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);

  const handleSorprendemePressed = async() => {
    const receta = await RecetasAPI.ObtenerRecetaAlAzar();
    setRecetaRandom(receta);
    setModalVisible(true);
  }

  const closeModal = () =>{
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      {modalVisible && <RecetaModal receta={recetaRandom} closeModal={closeModal}/>}
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitleText}>Bartelper!</Text>
        <Entypo name="drink" size={35} color="black" />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.RECETAS)}
          style={styles.button}>
          <Text style={styles.buttonText}>Recetas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSorprendemePressed}
          style={styles.button}>
          <Text style={styles.buttonText}>¡SORPRENDEME!</Text>
        </TouchableOpacity>
      </View>
      <View>
       <Text style={styles.versionText}>Version {versionActual}</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  button:{
    backgroundColor:'black',
    padding:15,
    width:'50%',
    borderRadius:15,
    margin:10,
  },
  buttonText:{
    color:'white',
    fontSize:20,
    textAlign:'center'
  },
  mainTitleText:{
    fontSize:35,
    marginRight:15,
  },
  mainTitleContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  menuContainer:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  versionText:{
    fontSize:20,
    textAlign:'center'
  }
});
export default HomeScreen;