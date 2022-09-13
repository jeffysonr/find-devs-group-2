import { useNavigation } from '@react-navigation/native';
import { Text, View ,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Auth, Hub } from 'aws-amplify'
import { useState } from 'react';




export default function Home() {
    const navigate = useNavigation().navigate
    
    async function signOut(){
        try {
          await Auth.signOut()
          
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem-vindo ao findDevs</Text>
            <TouchableOpacity>
                <Text 
                onPress={()=> signOut()}
                style={styles.texts}>
                   SAIR
                </Text>
            </TouchableOpacity>
        </View>
    )
}
