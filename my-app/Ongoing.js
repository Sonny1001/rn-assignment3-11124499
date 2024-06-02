import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Ongoing() {
  const data = [
    { key: '1', text: 'Mobile App Development' },
    { key: '2', text: 'Web Development' },
    { key: '3', text: 'Push Ups' },
    { key: '4', text: 'Digital Systems Design' },
    { key: '5', text: 'Programming' },
    { key: '6', text: 'Computer Organisation' },
    { key: '7', text: 'Systems Administration' },
    { key: '8', text: 'Cloud Computing' },
    { key: '9', text: 'Digital Signal Processsing' },
    { key: '10', text: 'Software Engineering'},
    { key: '11', text: 'Image Processing'},
    { key: '12', text: 'Social Media Mining'},
    { key: '13', text: 'Machine Learning'},
    { key: '14', text: 'Database Management'},
    { key: '15', text: 'Game Development'},

];


  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginLeft: 20,
    width: 360,
    height: 260,
    
  },
  itemText: {
    fontSize: 24,
  },
});

  