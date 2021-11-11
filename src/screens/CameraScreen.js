import React, { useState, useEffect,useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const CameraScreen=()=>{
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef(null)
  
  //Llama la funcion asincronica una vez al abrir la pantalla
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFotoPress= async()=>{
    console.log('Foto tomada')
    if(camera){
      const photo = await camera.current.takePictureAsync({
        base64:true
      });
    }
  }

  //Renderizados
  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No hay acceso a la camara</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera 
      style={styles.camera} 
      type={type}
      ref={camera}>      
      </Camera>
      <View style={styles.buttonFoto}>
        <TouchableOpacity>
        <Entypo name="save" size={55} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
           onPress={handleFotoPress}>
          <Entypo name="camera" size={65} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <MaterialIcons name="flip-camera-ios" size={55} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container:{
        flex:1
    },
    camera:{
        flex:1
    },
    buttonFoto:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    }
}); 
export default CameraScreen;