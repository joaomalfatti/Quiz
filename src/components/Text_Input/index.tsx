import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { styles } from './styles';

export function Text_Input(){
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};
