import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';

const Receta = ({ titulo, ingredientes, instrucciones, borrar}) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{' '}</Text>
        <Text style={styles.titulo}>{titulo}</Text>
        <View style={styles.cross}>
          <TouchableOpacity
            style={styles.crossButton}
            onPress={() => borrar(titulo)}
          >
            <Entypo name="cross" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.texto}>{ingredientes}</Text>
      <Text style={styles.instrucciones}>{instrucciones}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    padding:5,
    marginBottom:5,
    backgroundColor:'lightblue'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  crossButton:{
    backgroundColor:'white',
    padding:3,
    borderRadius:20,
  },
  titulo:{
    fontSize:20,
    fontStyle:'italic',
    marginBottom:5,
    textAlign:'center',
    textDecorationLine:'underline'
  },
  texto:{
    fontSize:18,
    padding:5,
  },
  instrucciones:{
    borderTopWidth:1,
    padding:10
  }
});

export default Receta;