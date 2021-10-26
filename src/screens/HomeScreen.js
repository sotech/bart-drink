import React from 'react';
import Screens from '../utils/Screens';
import {Text,View,StyleSheet, TouchableOpacity,Alert} from 'react-native';
import { Entypo } from '@expo/vector-icons';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
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
    width:'30%',
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
  }
});
export default HomeScreen;