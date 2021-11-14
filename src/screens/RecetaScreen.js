//Para el ingreso de una receta en particular
import React, { useState } from 'react';
import RecetaIngreso from '../components/RecetaIngreso';
import CameraComponent from '../components/CameraComponent';
import CameraPreview from '../components/CameraPreview';

import Screens from '../utils/Screens';

const RecetaScreen = ({navigation}) => {
  //Crear variable para la foto 
  //Crear variables para mostrar las pantallas
  const [showRecetaInputScreen, setShowRecetaInputScreen] = useState(true)
  const [showCameraScreen, setShowCameraScreen] = useState(false)
  const [showCameraPreviewScreen, setShowCameraPreviewScreen] = useState(false)
  
  const [fotoPreview,setFotoPreview] = useState(null);
  const [foto,setFoto] = useState(null);
  const [titulo, setTitulo] = useState('')
  const [ingredientes, setIngredientes] = useState('')
  const [instrucciones, setInstrucciones] = useState('')
    
  const handleTituloChanged = (textoIngresado) => {
    setTitulo(textoIngresado)
  }

  const handleDescripcionChanged = (textoIngresado) => {
    //Actualizar el Descripcion state
    setInstrucciones(textoIngresado)
  }
  
  const handleIngredientesChanged = (textoIngresado) => {
    setIngredientes(textoIngresado)
    //Actualizar el Ingredientes state
  }

  const handleAfterGuardar = () => {
    navigation.navigate(Screens.RECETAS)
  }
  
  const handleCamara = () => {
    //Al presionar la camara, cambiar de pantallas a la camara
    setShowRecetaInputScreen(false);
    setShowCameraPreviewScreen(false);
    setShowCameraScreen(true);
  }

  const handleFotoPressed = (foto) => {
    //Al tomar la foto, cambiar a la preview
    setFotoPreview(foto);
    setShowRecetaInputScreen(false);
    setShowCameraPreviewScreen(true);
    setShowCameraScreen(false);
  }

  const handleSave = (image) => {
    setFoto(image)
    setShowRecetaInputScreen(true);
    setShowCameraPreviewScreen(false);
    setShowCameraScreen(false);
  }

  const handleTakePictureAgain = () => {
    setShowRecetaInputScreen(false);
    setShowCameraPreviewScreen(false);
    setShowCameraScreen(true);
  }

  return (
    <>
      {showRecetaInputScreen && <RecetaIngreso 
      titulo={titulo}
      onTituloChanged={handleTituloChanged}
      ingredientes={ingredientes}
      onIngredientesChanged={handleIngredientesChanged}
      instrucciones={instrucciones}
      onDescripcionChanged={handleDescripcionChanged}
      foto={foto} 
      handleAfterGuardar={handleAfterGuardar} 
      handleCamara={handleCamara}/>}
      {showCameraScreen && <CameraComponent handleFotoPressed={handleFotoPressed}/>}
      {showCameraPreviewScreen && <CameraPreview image={fotoPreview} handleSave={handleSave} handleTakePictureAgain={handleTakePictureAgain}/>}
    </>
  )
}

export default RecetaScreen