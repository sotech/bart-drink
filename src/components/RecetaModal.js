import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

const RecetaModal = ({ receta, closeModal }) => {
  const { titulo = '', ingredientes = '', instrucciones = '' } = receta ?? {};

  return (
    <Modal
      animationType="slide"
      transparent={true}
    >
      <View
        onPress={closeModal}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>{titulo}</Text>
          </View>
          <View style={styles.ingredientesContainer}>
            <Text style={styles.ingredientes}>{ingredientes}</Text>
          </View>
          <View style={styles.instruccionesContainer}>
            <Text style={styles.instrucciones}>{instrucciones}</Text>
          </View>
          <TouchableOpacity
          style={styles.button}
          onPress={closeModal}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginHorizontal:20,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    padding:20,
    borderWidth:1,
    alignItems:'center'
  },
  titulo:{
    textDecorationLine:'underline',
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20,
  },
  ingredientesContainer: {
    marginVertical:20,
    alignSelf:'flex-start'
  },
  instruccionesContainer:{
    justifyContent:'center',
  },
  ingredientes:{
    fontSize:23,
  },
  instrucciones:{
    fontSize:20,
    fontStyle:'italic',
    marginVertical:20,
  },
  button:{
    backgroundColor:'#000',
    padding:20,
    borderWidth:1,
    borderRadius:20,
    marginVertical:20,
    width:'50%'
  },
  buttonText:{
    fontSize:20,
    color:'white'
  }
});

export default RecetaModal