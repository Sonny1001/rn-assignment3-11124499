import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, Button } from 'react-native';

export default function Categories() {
    return (
        <View>
            <Text style={styles.categories}>
        Categories
            </Text>

      

        <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.exerciseView}>
            <Text style={styles.categoryText}>
                Exercise
            </Text>
            <Text>
                4 Tasks
            </Text>
            <Image source={ require("./Images/young woman working online.png")} style = {styles.image}/>
            </View>

            <View style={styles.studyView}>
                <Text style={styles.categoryText}>
                    Study
                </Text>
                <Text>
                    2 tasks
                </Text>
                <Image source={ require("./Images/young woman working at desk.png")} style = {styles.image}/>
            </View>

            <View style={styles.codeView}>
            <Text style={styles.categoryText}>
                Code
            </Text>
            <Text>
                5 Tasks
            </Text>
            <Image source={ require("./Images/image3.png")} style = {styles.imageAll}/>
            </View>

            <View style={styles.cookView}>
            <Text style={styles.categoryText}>
                Cook
            </Text>
            <Text>
                1 Task
            </Text>
            <Image source={ require("./Images/image4.jpeg")} style = {styles.imageAll}/>
            </View>

            <View style={styles.prayView}>
            <Text style={styles.categoryText}>
                Pray
            </Text>
            <Text>
                1 Task
            </Text>
            <Image source={ require("./Images/image5.jpeg")} style = {styles.imageAll}/>
            </View>

            <View style={styles.washView}>
            <Text style={styles.categoryText}>
                Wash
            </Text>
            <Text>
                1 Task
            </Text>
            <Image source={ require("./Images/image6.jpeg")} style = {styles.imageAll}/>
            </View>

            <View style={styles.danceView}>
            <Text style={styles.categoryText}>
                Dance
            </Text>
            <Text>
                3 Tasks
            </Text>
            <Image source={ require("./Images/image7.jpeg")} style = {styles.imageAll}/>
            </View>

            <View style={styles.singView}>
            <Text style={styles.categoryText}>
                Sing
            </Text>
            <Text>
                2 Tasks
            </Text>
            <Image source={ require("./Images/image8.jpeg")} style = {styles.imageAll}/>
            </View>

            

        </ScrollView>

        <View style={styles.button}>
            <Button title='Click to checkout our Homepage!'/>
        </View>
       
        
        </View>
      
      
    );
  }

  const styles = StyleSheet.create({

    categories:{
        fontSize: 30,
        marginLeft: 4,
        marginTop: -30,
        marginBottom: 15,
    },
    scrollView: {
        flexDirection: 'row',
        marginLeft: 4,
        
    },

        exerciseView: {
            width: 200,
            marginRight: 20,
            marginLeft: 20,
        },

        studyView: {
            width: 200,
            marginRight: 20,
        },
        
        codeView: {
            width: 200,
            marginRight: 20,
        },

        cookView: {
            width: 200,
            marginRight: 20,
        },

        prayView: {
            width: 200,
            marginRight: 20,
        },

        washView: {
            width: 200,
            marginRight: 20,
        },

        danceView: {
            width: 200,
            marginRight: 20,
        },

        singView: {
            width: 200,
            marginRight: 20,
        },

        imageAll: {
            width: 200,
            height: 200 ,
            flex: 1,
            borderRadius: 20,
            
        },

        categoryText: {
            fontSize: 17,
            fontWeight: 'bold'
        },

        button: {
            marginRight: 70,
            marginLeft: 70,
            marginTop: 30,
        }

  });