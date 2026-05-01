import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Aplicacao() {
  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [resultado, setResultado] = useState()

  const somar = () => {
    const r = parseInt(n1) + parseInt(n2)
    setResultado(r)
  }



  return (
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}>Calculadora</Text>
      </View>

      <View style={{ margin: 15 }}>
        <Text> Primeiro Numero: </Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o primeiro numero'
          placeholderTextColor='#6f6f6f'
          autoFocus={true}
          keyboardType={'numeric'}

          onChangeText={text => setN1(text)}
        />
      </View>

      <View style={{ margin: 15 }}>
        <Text> Segundo Numero: </Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o segundo numero'
          placeholderTextColor='#6f6f6f'
          keyboardType={'numeric'}

          onChangeText={text => setN2(text)}
        />

      </View>

      <View style={{ margin: 15 }}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => somar()}
          activeOpacity={0.5}
        >
          <Text style={styles.textoBotao}> Somar </Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 15 }}>
        <Text style={styles.resposta}> Total da soma: {resultado} </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  tudo: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  },

  titulo: {
    color: '#0081f1',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 10
  },

  caixaDeTexto: {
    borderWidth: 1,
    borderColor: '#0081f1',
    color: '#f2f2f2',
    borderRadius: 40,
    paddingLeft: 25,
    height: 60
  },

  botao: {
    backgroundColor: '#0081f1',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18
  },

  resposta: {
    color: '#0081f1',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30
  }
});
