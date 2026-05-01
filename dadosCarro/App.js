import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [n3, setN3] = useState()
  const [resultado, setResultado] = useState()

  const agrupar = () => {
    if (!n1 || !n2 || !n3) {
      setResultado('Por favor, preencha todos os campos.')
      return
    }
    const r ='Modelo: ' + n1 + '\n Valor: ' + n2 + '\n Ano fab.: ' + n3
    setResultado(r)
  }
  return (
    <View style={styles.tudo}>

      <View>
        <Text style={styles.titulo}>Dados do Carro</Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}> Modelo: </Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o modelo do carro'
          placeholderTextColor='#6f6f6f'
          autoFocus={true}
          keyboardType={'default'}
          onChangeText={text => setN1(text)}
        />
      </View>
      <View style={styles.campo}>
        <Text style={styles.label}> Valor: </Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o valor do carro'
          placeholderTextColor='#6f6f6f'
          keyboardType={'numeric'}
          onChangeText={text => setN2(text)}
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}> Ano de fabricação: </Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder='Digite aqui o ano de fabricação'
          placeholderTextColor='#6f6f6f'
          autoFocus={true}
          keyboardType={'default'}
          onChangeText={text => setN3(text)}
        />
      </View>

      <View style={styles.campo}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => agrupar()}
          activeOpacity={0.5}
        >
          <Text style={styles.textoBotao}> Salvar</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 5}}>
          <Text style={styles.label}> Dados do carro: </Text>
          <Text style={styles.dados}> {resultado} </Text>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,

    backgroundColor: '#EFE3CA',
    justifyContent: 'center',
    alignItems: 'center',

  },
  titulo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#170C79',
    borderWidth: 4,
    borderColor: '#ddc48f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#cad6ef',
  },

  campo: {
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
  },

  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2E30E0',
  },
  caixaDeTexto: {

    borderWidth: 4,
    borderColor: '#ddc48f',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',
  },

  botao: {
    backgroundColor: '#cad6ef',
    width: '50%',
    padding: 10,
    
    justifyContent: 'center',
    borderRadius: 25,
  },

  textoBotao:  {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#170C79',
  },

  dados: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#ddc48f',
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#2E30E0',
    backgroundColor: '#cad6ef',
  } 

});
