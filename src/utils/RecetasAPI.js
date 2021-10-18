import AsyncStorage from '@react-native-async-storage/async-storage';

const RECETAS_KEY = '@recetas';

const GetRecetas = async() =>{
  const recetas = await AsyncStorage.getItem(RECETAS_KEY);
  if (!recetas) {
    return []
  } else {
    return JSON.parse(recetas);
  }
}

const SaveRecetas = async(recetas) =>{
  await AsyncStorage.setItem(RECETAS_KEY,JSON.stringify(recetas));
}

const ClearRecetas = async() =>{
  await AsyncStorage.clear();
}

export default {
  GetRecetas,
  SaveRecetas,
  ClearRecetas
};