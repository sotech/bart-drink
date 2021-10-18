import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Receta = ({nombre,descripcion}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>{nombre}</Text>
      <Text style={styles.texto}>{descripcion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1,
    padding:5,
    marginBottom:5,
  },
  titulo:{
    fontSize:20,
    fontStyle:'italic',
    marginBottom:5,
    textAlign:'center',
  },
  texto:{
    fontSize:18,
    padding:5,
  }
});

export default Receta;