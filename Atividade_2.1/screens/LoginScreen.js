import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { colors } from '../theme/colors';

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin() {
        if (usuario === 'admin' && senha === 'admin') {
            navigation.navigate('Home');
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },

    card: {
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: ,
    },


});