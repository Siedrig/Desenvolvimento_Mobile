import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('')

  const exibirDados = () => {
    alert(nome)
  }

  const exibirSaudacao = () => {
    alert('Olá alunos!')
  }

  const exibirNome = (nome) => {
    alert("Seja bem vinde, " + nome)
  }
  return (
    <View style={styles.container}>

      <Text style={styles.label}> Nome: </Text>
      <TextInput style={styles.input}
        placeholder=' Digite seu nome'
        onChangeText={text => setNome(text)}
      />

      <TouchableOpacity style={styles.button} onPress={exibirDados}>

        Exibir Mensagem
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
    width: '10%',
  },
});