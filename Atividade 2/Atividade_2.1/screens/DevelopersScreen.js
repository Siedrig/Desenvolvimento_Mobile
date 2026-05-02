import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { colors } from '../theme/colors';

const desenvolvedores = [
  {
    id: '1',
    nome: 'Romeu Pietro',
    cargo: 'Full Stack',
    foto: require('../assets/Romeu.jpeg')
  },
  {
    id: '2',
    nome: 'Samyra Caitano ',
    cargo: 'Full Stack',
    foto: require('../assets/Samyra.jpeg')
  },
];

export default function DevelopersScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Desenvolvedores',
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <FlatList
      data={desenvolvedores}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.foto} style={styles.foto} />
          <View>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.cargo}>{item.cargo}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  foto: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    resizeMode: 'cover',
  },
  nome: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  cargo: {
    fontSize: 13,
    color: colors.textMuted,
  },
});