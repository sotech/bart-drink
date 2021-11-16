import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const FotoPreview = ({foto,onDelete}) => {
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: foto }} />
      <TouchableOpacity
        style={styles.crossButton}
        onPress={() => onDelete()}
      >
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 150,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft:'5%'
  },
  crossButton: {
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 20,
    alignSelf:'flex-start'
  },
});

export default FotoPreview