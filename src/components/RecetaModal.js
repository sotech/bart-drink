import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Button, TouchableOpacity,Image } from 'react-native'

const RecetaModal = ({ receta, closeModal }) => {
  const { titulo = '', ingredientes = '', instrucciones = '', foto = null } = receta ?? {};

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
          {receta &&
            (<View style={styles.modalContainer}>
              <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
              </View>
              <View style={styles.ingredientesContainer}>
                <Text style={styles.label}>Ingredientes:</Text>
                <Text style={styles.ingredientes}>{ingredientes}</Text>
              </View>
              <View style={styles.instruccionesContainer}>
                <Text style={styles.label}>Instrucciones:</Text>
                <Text style={styles.instrucciones}>{instrucciones}</Text>
              </View>
              {foto && 
              <View>
                <Image style={styles.icono} source={{ uri: foto }} />
              </View>
              }
            </View>
            )}
            {!receta && (
            <View style={styles.modalContainer}>
                <Text style={styles.warningTitle}>Error</Text>
                <Text style={styles.warning}>No hay recetas</Text>
              </View>
            )}
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
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center'
  },
  modalContainer:{
    width:'80%'
  },
  label:{
    fontSize:20,
    fontStyle:'italic',
    textDecorationLine:'underline'
  },
  icono: {
    width: 100,
    height: 100,
    alignSelf:'center'
  },
  tituloContainer:{
    alignItems:'center',
  },
  titulo: {
    textDecorationLine: 'underline',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ingredientesContainer: {
    marginVertical: 20,
  },
  ingredientes: {
    fontSize: 23,
  },
  instrucciones: {
    fontSize: 20,
    fontStyle: 'italic',
    marginVertical: 20,
  },
  warningTitle: {
    textDecorationLine: 'underline',
    fontSize: 30,
    marginVertical:20,
    textAlign:'center',
  },
  warning:{
    fontSize:20,
    marginVertical: 20,
    textAlign:'center'
  },
  button: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 20,
    padding:15,
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
});

export default RecetaModal