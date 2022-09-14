
import { View, Text,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function CardDev() {

  return (
    <View style={styles.modal}>
    <View style={styles.cardmodal}>
        
        <View style={styles.iconmodal}>
                <Ionicons name="ios-close" size={36} color="#EEE" />
                <Ionicons name="ios-star" size={26} color="#EEE" />
            </View>

        
    </View>
</View>
  );
}


const styles = StyleSheet.create({
  modal:{
    backgroundColor: '#121214',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:20,
    opacity: 0.8,
},
cardmodal:{
    backgroundColor: '#121214',
    width: '90%',
    height: '90%',
    borderRadius: 6,
},
iconmodal:{
    backgroundColor: 'red',
    padding: 20,
    flexDirection:'row-reverse',
    justifyContent: 'space-around',
}
    })