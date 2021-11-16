import React from 'react';
import {View,Text,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';

const CameraPreview = ({ image, handleSave, handleTakePictureAgain}) => {
  const handleSaveFoto= ()=>{
    handleSave(image.uri)
  }
  return(
    <View style={styles.container}>
      <ImageBackground
        source={image} resizeMode="cover" style={styles.image}
      />
      <View style={styles.buttonFoto}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleTakePictureAgain}
          >
          <Entypo name="camera" size={65} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleSaveFoto}>
          <Entypo name="save" size={55} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  buttonFoto: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default CameraPreview