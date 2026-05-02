import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { colors } from '../theme/colors';

const produtos = [
  { id: '1', nome: 'Notebook',  preco: 'R$ 3.500,00', categoria: 'Informática' },
  { id: '2', nome: 'Mouse',     preco: 'R$ 120,00',   categoria: 'Periférico'  },
  { id: '3', nome: 'Teclado',   preco: 'R$ 250,00',   categoria: 'Periférico'  },
  { id: '4', nome: 'Monitor',   preco: 'R$ 1.200,00', categoria: 'Informática' },
  { id: '5', nome: 'Headset',   preco: 'R$ 400,00',   categoria: 'Áudio'       },
];

export default function ProductsScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Produtos',
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
          </View>
          <Text style={styles.preco}>{item.preco}</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  nome: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  categoria: {
    fontSize: 12,
    color: colors.textMuted,
  },
  preco: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.action,
  },
});