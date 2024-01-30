import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarItem from './src/components/CarItem';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.topContainer3}>
        <Text style={styles.container2}></Text>
        <Text style={styles.txt1}>Name : Foad Khatib </Text>
        <Text style={styles.txt1}>Birthday : 14/6/2004 </Text>
        <Text style={styles.txt2}>My First ui</Text>
        <ScrollView style={styles.scrollView}></ScrollView>
      </View> */}

      <CarItem/>

    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  txt1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
    right: 4,
    left: 70,



  },
  container2: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
    borderWidth: 2,
    flexDirection: 'row',
    right: 95,
    top: 72
  },
  txt2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    top: 15,
    padding: 5,
  },
  container3: {
    flex: 2,
    alignItems: 'center',
    borderWidth: 3,
    marginTop: 250,
    margin: 20,
    marginBottom: 275,
    fontSize: 30,
  },
  

});