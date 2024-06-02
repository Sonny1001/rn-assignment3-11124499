import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , Image} from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <TextInput style= {styles.input} placeholder='Search'>

            </TextInput>

            <Image source={ require('./Images/Filter.png')} style={styles.imageNav}/>
        </View>
      
    );
  }

  const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        width:260,
        height: 50,
        borderRadius:10,
        paddingLeft: 20,
    },

    imageNav:{
        marginRight: 27,
  
    },

    navbar:{
        flexDirection: "row",
        justifyContent:"space-between",
    }
  })