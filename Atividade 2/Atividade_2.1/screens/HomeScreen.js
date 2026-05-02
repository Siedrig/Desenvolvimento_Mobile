import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { colors } from '../theme/colors';


export default function HomeScreen({ navigation }) {

  //Experimentando com botões em um header personalizado, ficou estranho, mas é funcional.
  /*useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleAlign: 'center',

      headerRight: () => (
        <View style={styles.headerConjunto}>
          <TouchableOpacity
            style={styles.headerBotao}
            onPress={() => navigation.navigate('Produtos')}
          >
            <Text style={styles.headerBotaoTexto}>Ver Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerBotao}
            onPress={() => navigation.navigate('Desenvolvedores')}
          >
            <Text style={styles.headerBotaoTexto}>Desenvolvedores</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation]);*/


return (
  <View style={styles.container}>
    <Text style={styles.titulo}>Sistema de Gerenciamento</Text>

    <TouchableOpacity
      style={styles.botao}
      onPress={() => navigation.navigate('Produtos')}
    >
      <Text style={styles.botaoTexto}>Produtos</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.botao, { backgroundColor: colors.action }]}
      onPress={() => navigation.navigate('Desenvolvedores')}
    >
      <Text style={styles.botaoTexto}>Desenvolvedores</Text>
    </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: '3%',
    paddingHorizontal: '30%',
  },

  titulo: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.text,
    marginBottom: '10%',
  },

  subtitulo: {
    fontSize: 14,
    color: colors.textMuted,
  },

  headerConjunto: {
    flexDirection: 'row',
    gap: 8,
    marginRight: 8,
  },


  botao: {
  backgroundColor: colors.primary,
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginBottom: 12,
},
botaoTexto: {
  color: colors.white,
  fontSize: 16,
  fontWeight: '500',
},
 /* headerBotao: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },

  headerBotaoTexto: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '500',
  },*/
  
});