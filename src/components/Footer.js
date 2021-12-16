import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Footer = () => {
   return (
    <View style={styles.footer}>
        <Text style={styles.text}> Author: Nathan Amorrich</Text>
        <Text style={styles.text}>  namorric@tlu.ee</Text>
    </View>  
)}
export default Footer

const styles = StyleSheet.create({
    footer: {
      backgroundColor: 'rgba(105, 105, 105, 0.7)',
      borderWidth: 0,
      borderRadius: 20,
      justifyContent: 'center',
    },
    text:{
      color: "white",
      fontSize: 15,
      textAlign: "center"
    }
  });
  