import AsyncStorage from '@react-native-async-storage/async-storage';

const RECETAS_KEY = '@recetas';

/**
 * Obtiene la informacion dentro de memoria del telefono de las recetas
 *
 * @return {Array} Una lista con las recetas
 */
const ObtenerRecetas = async() =>{
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
const GuardarRecetas = async (recetas) =>{
  await AsyncStorage.setItem(RECETAS_KEY, JSON.stringify(recetas));
}

/**
 * Toma una unica receta y la guarda dentro de memoria del telefono, añadiendose a la lista existente
 *
 * @param {Array} Recetas
 */

const GuardarReceta = async(receta) =>{
  //Obtener las recetas
  let recetas = await ObtenerRecetas();
  //Deberia haber alguna validacion aqui
  recetas.push(receta)
  GuardarRecetas(recetas)
}

/**
 *Limpia la memoria del telefono relacionada a esta aplicacion
 *
 */
const ClearDatabase = async() =>{
  await AsyncStorage.clear();
}

export default {
  GetRecetas,
  SaveRecetas,
  GuardarReceta,
  ClearDatabase
};