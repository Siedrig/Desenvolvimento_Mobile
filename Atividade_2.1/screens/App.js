import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';


export default function HomeScreen({ navigation }) {


  useLayoutEffect(() => {
    navigation.setoptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerRight: () => (
        <View style={styles.headerConjunto}>
          <TouchableOpacity
            style={styles.headerBotao}
            onPress={() => navigation.navigate('Produtos')}
          >
            <Text style={{ color: '#fff', marginRight: 10 }}>Ver Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerBotao}
            onPress={() => navigation.navigate('Desenvolvedores')}
          >
            <Text style={{ color: '#fff', marginRight: 10 }}>Desenvolvedores</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation]);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Homescreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '10%',
  },

  botao: {
    backgroundColor: '#007BFF',
    padding: '1%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: '10%',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});