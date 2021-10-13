import React from 'react';
import Screens from '../Screens';
import {Text,View,StyleSheet, Button, TouchableOpacity} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainTitleContainer}>
        <Text style={styles.mainTitleText}>BartDrinks</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.RECETAS)}
          style={styles.button}>
          <Text style={styles.buttonText}>Recetas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.INGREDIENTES)}
          style={styles.button}>
          <Text style={styles.buttonText}>Ingredientes</Text>
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
    fontSize:35
  },
  mainTitleContainer:{
    flex:1,
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