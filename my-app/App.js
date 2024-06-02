import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Navbar from './Navbar';
import Categories from './Categories';
import Ongoing from './Ongoing';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.Hello}> 
        <Text style={styles.boldText}>
        Hello , Devs
        </Text>
        <Image source={ require("./Images/Profile Image.png")} style = {styles.image}/>
        </View>

        <View style={styles.smallView}>
        <Text style={styles.smallText}>
        19 tasks today
        </Text>
        </View>
      
        <View style={styles.navBar}>
        <Navbar/> 
        </View>
        

        <Categories/>


        <Ongoing/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,

    
    backgroundColor: '#FFFDD0',
    alignItems: 'left',
    
  },

  boldText: {
    fontSize: 30,
    
    marginLeft: 30,
  },

  smallView: {
    marginTop: -15,
    marginLeft: 4,
  },

  smallText: {
    fontSize: 15,
  },

  Hello:{
    flexDirection: "row",
    justifyContent:"space-between",
    marginLeft: -25,
    marginRight: 30,


  },

  navBar: {
    marginTop: 50,
    marginLeft: 5,
    marginBottom: 70,
  },

  image:{
  
  }
});
