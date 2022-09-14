
import { View, Text,StyleSheet,Dimensions } from 'react-native';
import { HeaderLogo } from './HeaderLogo';
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';


export function Header() {

    const navigate = useNavigation().navigate

  return (
    <View style={styles.container}>
        <HeaderLogo/>
        <Entypo name="log-out" size={20} color="#E1E1E6" onPress={() => navigate('SignIn')}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#29292E',
        width: Dimensions.get('window').width,
        height: 140,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        elevation: 10,
    },
})