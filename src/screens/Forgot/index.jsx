import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Forgot() {

    const [username, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigation().navigate

    const onResetPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.forgotPassword(username)
            Alert.alert('Atenção', 'Um código de verificação foi enviado para o e-mail cadastrado!')
            navigate('NewPassword')
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
            <Text style={styles.title}>Esqueci a senha:</Text>

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Usuário:'
                onChangeText={value => setUser(value)}
            />

            <Button
                color='#2D9135'
                title={loading ? 'Carregando...' : 'Resetar'}
                onPress={() => onResetPress()}
                disabled={loading ? true : false}
                buttonStyle={styles.buttons}
            />

            <TouchableOpacity>
                <Text
                    onPress={() => navigate('SignIn')}
                    style={styles.texts}>
                    Voltar para a tela de login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
