import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio04 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor:'coral'}]}/>
      <View style={[styles.box, {backgroundColor:'orchid'}]}/>
      <View style={[styles.box, {backgroundColor:'lightgray'}]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box:{
        width:300,
        height:300,
    },
})

export default Exercicio04