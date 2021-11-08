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
 * Devuelve un true o false, dependiendo si el titulo de una receta ya esta guardado
 *
 * @param {string} titulo
 * @returns {boolean} existe
 */
const ExisteReceta = async(titulo) => {
  const recetas = await ObtenerRecetas();
  const tituloMatch = (receta) => receta.titulo == titulo;
  return recetas.some(tituloMatch)
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
const ClearRecetas = async() =>{
  await AsyncStorage.clear();
}

export default {
  ObtenerRecetas,
  GuardarRecetas,
  GuardarReceta,
  ClearRecetas,
  ExisteReceta
};