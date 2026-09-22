import {View, Text, Button} from "react-native"
import {auth} from '../config/firebase'
import {sair} from "../services/auth"
 
export default function Home(){
    async function realizarLogout() {
        await sair()
        navigation.navigate('Login')
    }
    return(
        <View>
            <Text>Seja bem-vindo(a), {auth.currentUser?.email}!</Text>
            <Button
                title='Sair da conta'
                onPress={realizarLogout}
            />
        </View>
    )
}