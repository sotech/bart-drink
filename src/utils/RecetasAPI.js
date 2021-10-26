import AsyncStorage from '@react-native-async-storage/async-storage';

const RECETAS_KEY = '@recetas';

/**
 * Obtiene la informacion dentro de memoria del telefono de las recetas
 *
 * @return {Array} Una lista con las recetas
 */
const GetRecetas = async() =>{
  const recetas = await AsyncStorage.getItem(RECETAS_KEY);
  if (!recetas) {
    return []
  } else {
    return JSON.parse(recetas);
  }
}

/**
 * Toma una lista de recetas y las guarda dentro de memoria del telefono, reemplazando la lista anterior
 *
 * @param {Array} Recetas
 */
const SaveRecetas = async(Recetas) =>{
  await AsyncStorage.setItem(RECETAS_KEY,JSON.stringify(Recetas));
}


/**
 *Limpia la memoria del telefono relacionada a esta aplicacion
 *
 */
const ClearRecetas = async() =>{
  await AsyncStorage.clear();
}

export default {
  GetRecetas,
  SaveRecetas,
  ClearRecetas
};