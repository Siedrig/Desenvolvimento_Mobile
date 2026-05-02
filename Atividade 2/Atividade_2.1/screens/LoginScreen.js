import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { colors } from '../theme/colors';

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (usuario === 'admin' && senha === 'admin') {
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Bem-vindo</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor={colors.textMuted}
          value={usuario}
          onChangeText={setUsuario}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors.textMuted}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingTop: '3%',
    paddingHorizontal: '30%',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 28,
    borderWidth: 1,
    borderColor: colors.border,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: colors.text,
    backgroundColor: colors.background,
    marginBottom: 14,
  },
  botao: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  botaoTexto: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});