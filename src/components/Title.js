import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Title = (props) => {
   return (
    <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
    </View>  
)}
export default Title

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      flex: 0.2,
      backgroundColor: 'rgba(105, 105, 105, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      justifyContent: 'center',
    },
    text:{
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center"
    }
  });
  