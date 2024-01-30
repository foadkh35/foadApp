import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CarItem = props => {
    const { brand, year, km, price, color } = props;
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.topContainer3}>
                    <View style={[styles.greensqr, color && { backgroundColor: color }]}></View>
                </View>
                <Text style={styles.txt}>{'brand:' + brand}</Text>
                <Text style={styles.txt}>{`year: ${year}`}</Text>
                <Text style={styles.txt}>{`km: ${km}`}</Text>
                <Text style={styles.txt}>{`price: ${price}`}</Text>
            </View>
            <Text style={styles.firstUI}>My First UI</Text>
        </View>
    )
}



export default CarItem

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