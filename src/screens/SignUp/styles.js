import { StyleSheet, Dimensions, } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#121214',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical:40,
    },

    form: {
        marginTop: 40,
        marginBottom: 100,
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
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingLeft: 40,

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
    socialContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        justifyContent: 'space-evenly'

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
    links: {
        textDecorationLine: 'underline',
        color: '#5BDE66',
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    socialButtons:{
        color: '#4D4D4D',
        fontFamily: 'Poppins_700Bold',
        width: '40%',
        backgroundColor: '#E1E1E6',
        
        paddingVertical:10,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:20
        
    },
    socialTexts:{
        color: '#4D4D4D',
        fontFamily: 'Poppins_700Bold',
        marginLeft:10,
        fontSize: 12
    },
    icon:{
        translateX: 25,
        translateY: 10,
        zIndex: 2,
    }
})