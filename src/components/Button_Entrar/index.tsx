import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles'

export function Button_Entrar(){
  return (

    <TouchableOpacity
      style={styles.btn_entrar}
      onPress={()=>{}}
    >
      <Text>Entrar</Text>
    </TouchableOpacity>

  );
};