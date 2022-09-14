import { StyleSheet, Dimensions, } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#121214',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    form: {
        marginTop: 80,
        marginBottom: 120,
    },
    inputContainer:{
        flexDirection:'row'
    },
    inputs: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        width: Dimensions.get('window').width - 80,
        marginBottom: 20,
        borderRadius: 5,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        paddingLeft: 45,
        translateX: -10,
    },
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 10

    },
    texts: {
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        margin: 20,
        fontSize: 12,
        textAlign: 'center'
    },
    textLink: {
        textDecorationLine: 'underline',
        fontFamily: 'Poppins_400Regular',
        color: 'white',
        margin: 20,
        fontSize: 12,
        textAlign: 'center'
    },
    
    buttons: {
        width: '80%',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D9135',
        borderRadius: 10,
        marginBottom: 20
    },
        
    icon:{
        translateX: 25,
        translateY: 10,
        zIndex: 2,
    }
})