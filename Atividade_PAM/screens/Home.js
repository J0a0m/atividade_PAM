import { View, Text, Button, StyleSheet } from "react-native"
import { auth } from '../config/firebase'
import { sair } from "../services/auth"

export default function Home({ navigation }) {

    async function realizarLogout() {
        await sair()
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Seja bem-vindo(a)!
            </Text>

            <Text style={styles.email}>
                {auth.currentUser?.email}
            </Text>

            <View style={styles.botao}>
                <Button
                    title="Sair da conta"
                    onPress={realizarLogout}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        backgroundColor: '#f5f5f5',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },

    email: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
        textAlign: 'center',
    },

    botao: {
        width: '80%',
    },
})