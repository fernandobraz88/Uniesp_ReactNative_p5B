import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        height: 100,
        width: '100%',
        backgroundColor:'red'
    },
    box2:{
        height: 100,
        width: '100%',
        backgroundColor:'blue'
    },
    box3:{
        height: 100,
        width: '100%',
        backgroundColor:'green'
    },
})

export default Exercicio01