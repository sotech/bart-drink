import React,{useState,useRef,useEffect} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

const CameraComponent = ({handleFotoPressed}) => {
  //Permisos
  const [hasPermission, setHasPermission] = useState(null);
  //Camara trasera
  const [type, setType] = useState(Camera.Constants.Type.back);
  //Referencia a la camara
  const camera = useRef(null)
  
  //Llama la funcion asincronica una vez al abrir la pantalla y setear los permisos
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync()
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFotoPress = async () => {
    if (camera) {
      const {uri} = await camera.current.takePictureAsync({
        skipProcessing:true
      });
      //Todo - Mover a la otra pantalla para guardar totalmente
      //Todo - Ver como cargar assets
      const asset = await MediaLibrary.createAssetAsync(uri);
      handleFotoPressed(asset)
    }
  }

  const handleSwitchCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
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
        <TouchableOpacity
          style={styles.button}
          onPress={handleFotoPress}>
          <Entypo name="camera" size={65} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSwitchCamera}>
          <MaterialIcons name="flip-camera-ios" size={55} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonFoto: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default CameraComponent