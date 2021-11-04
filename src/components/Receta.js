import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Receta = ({titulo,ingredientes,instrucciones}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
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