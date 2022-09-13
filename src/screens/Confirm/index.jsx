import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Confirm() {

    const [username, setUser] = useState('')
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigation().navigate


    
    const onConfirmPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.confirmSignUp(username, code)
            Alert.alert('Sucesso',"E-mail confirmado com sucesso!")
            navigate('SignIn')
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    const onResendPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.resendSignUp(username)
            Alert.alert('Sucesso', "Código enviado para o email cadastrado!")
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Confirme seu E-mail</Text>

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Usuário:'
                onChangeText={value => setUser(value)}
            />

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Código:'
                onChangeText={value => setCode(value)}
            />


            <Button
                color='#2D9135'
                title={loading ? 'Carregando...' : 'Confirmar'}
                onPress={() => onConfirmPress()}
                disabled={loading ? true : false}
                buttonStyle={styles.buttons}
            />

            <Button
                color='#2D9135'
                title={loading ? 'Carregando...' : 'Reenviar código'}
                onPress={() => onResendPress()}
                disabled={loading ? true : false}
                buttonStyle={styles.buttons}
            />
            <TouchableOpacity>
                <Text 
                onPress={()=> navigate('SignIn')}
                style={styles.texts}>
                    Voltar para a tela de login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
