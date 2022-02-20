import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles'

export function Button_Registrar(){
  return (

    <TouchableOpacity
      style={styles.btn_registrar}
      onPress={()=>{}}
    >
      <Text style={styles.txt_registrar}>Registrar</Text>
    </TouchableOpacity>

  );
};