import {StyleSheet, Dimensions,  } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor: '#222',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
inputs:{
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
    width: Dimensions.get('window').width -80,
    marginBottom: 20,
    borderRadius: 5,
},
title:{
    fontSize: 20,
    color: 'white',
    marginBottom: 10

},
texts:{
    color: 'red',
    margin: 20,
},
socialContainer:{
    flexDirection: 'row',
    width:Dimensions.get('window').width -50,
    justifyContent: 'space-evenly'

},
buttons:{
    padding: 20,
},
links:{
    color: '#5BDE66',
    margin: 15,
    fontWeight: 'bold',

}
})