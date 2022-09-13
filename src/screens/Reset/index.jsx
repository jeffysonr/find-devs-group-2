import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles'
import { Auth } from 'aws-amplify'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Reset() {

    const [username, setUser] = useState('')
    const [code, setCode] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigation().navigate

    
    const onResetPress = async () => {
        if (loading) {
            return
        }

        setLoading(true)

        try {
            const response = await Auth.forgotPasswordSubmit(username, code, password)
            Alert.alert('Sucesso', 'Senha alterada com sucesso!')
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
            <Text style={styles.title}>Resetar senha:</Text>

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

            <TextInput
                style={styles.inputs}
                placeholderTextColor='#EEE'
                placeholder='Senha:'
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
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
