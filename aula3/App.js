import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>
            Programação de Dispositivos moveis
          </Text>
        </View>
        <View>

          <Text> Tecnologias</Text>

          <Text> Java</Text>

          <Image style={styles.image} source={require('./assets/snack-icon.png')} />

          <Text> Swift</Text>

          <Image style={styles.image} source={require('./assets/snack-icon.png')} />

          <Text> Flutter</Text>

          <Image style={styles.image} source={require('./assets/snack-icon.png')} />

          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>

          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native</Text>
          <Text> React Native 1000</Text>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 8,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 15,
    color: '#00f',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  image: {
    width: 100,
    height: 100
  },

});
