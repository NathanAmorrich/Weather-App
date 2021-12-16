import React, { Component } from "react";
import {ImageBackground, View, StyleSheet, Text, ScrollView, Button} from "react-native";
import Title from "../components/Title"
import ResearchBar from "../components/ResearchBar";
import CityCard from "../components/CityCard";

const ViewStyleProps = () => {
    return (
    <ScrollView>
      <View  style={styles.container}>
        <ImageBackground source={require('../pictures/back4.jpg')} resizeMode="cover" style={styles.image}>
        <Title title="Welcome to the Weather App"/>
        <ResearchBar/>
        <CityCard city_name = "Tallinn"/>
        <CityCard city_name = "Paris"/>
        <CityCard city_name = "Berlin"/>
        </ImageBackground>
      </View> 
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default ViewStyleProps;
 


