import React, { useEffect, useState, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import Receta from '../components/Receta';
import RecetasAPI from '../utils/RecetasAPI';
import Screens from '../utils/Screens';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const RecetasScreen = ({ navigation }) => {
  const [recetas, setRecetas] = useState([]);
  const [filteredRecetas,setFilteredRecetas] = useState([]);
  const [search,setSearch] = useState('')
  const searchInput = useRef(null)

  useFocusEffect(
    React.useCallback(() => {
      PopulateRecetas();
    }, [])
  );

  useEffect(()=>{
    filterRecetas()
  },[search])

  useEffect(()=>{
    setFilteredRecetas(recetas)
  },[recetas])
  
  const handleSearchChange = (text) =>{
    setSearch(text)
  }

  const filterRecetas = () => {
    if(search == ''){
      setFilteredRecetas(recetas)
    }else{
      const newRecetas = recetas.filter(receta => {
        const resultado = receta.titulo.toUpperCase().includes(search.toUpperCase())
        return resultado
      })
      setFilteredRecetas(newRecetas)
    }
  }

  const PopulateRecetas = async () => {
    const recetasData = await RecetasAPI.ObtenerRecetas()
    setRecetas(recetasData);
    setFilteredRecetas(recetasData)
  }

  const handleAgregarReceta = async () => {
    navigation.navigate(Screens.RECETA)
  }

  const handleSearchRecetas = (data) => {
    //El componente Search devuelve el array modificado para setearse

    setRecetas(data)
  }

  const handleDelete = async (key) => {
    const newRecetas = recetas.filter(receta => receta.titulo !== key);
    await RecetasAPI.GuardarRecetas(newRecetas);
    setRecetas(await RecetasAPI.ObtenerRecetas());
    //Comentar el toast si se trabaja en la version web, sino la app crashea
    ToastAndroid.show(`${key} borrado exitosamente.`, ToastAndroid.SHORT);
    //console.log(`${key} borrado exitosamente.`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.recetasContainer}>
        <View style={styles.searchContainer}>
          <TextInput
          placeholder={'Buscar recetas'}
          value={search}
          onChangeText={handleSearchChange}
          ref={searchInput}
          />
          <TouchableOpacity
          onPress={()=>{
            searchInput.current.focus()
          }}>
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.recetasScrollContainer}>
          {filteredRecetas.map(r => {
            return <Receta
              key={r.id}
              titulo={r.titulo}
              ingredientes={r.ingredientes}
              instrucciones={r.instrucciones}
              foto={r.foto}
              borrar={handleDelete}
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
            <AntDesign name="pluscircle" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:5,
    padding:7,
    backgroundColor:'lightgray',
    borderRadius:20
  },
  recetasContainer: {
    flex: 2,
    marginHorizontal: '5%',
  },
  button: {
    padding: 20,
    marginHorizontal: 30,
    marginVertical: 5,
    backgroundColor: 'black',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
})
export default RecetasScreen;