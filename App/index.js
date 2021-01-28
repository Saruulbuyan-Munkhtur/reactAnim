/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import CardCarousel from './components/cardCarousel';

const App = () => (
  <SafeAreaView style={styles.main}>
      <Text style={styles.title}>RENTNYC</Text>
      <ScrollView>
        <CardCarousel style={styles.container}/>
        <CardCarousel style={styles.container}/>
        <CardCarousel style={styles.container}/>
      </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    height: 700,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Bodoni Sans Text',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 35,
  },
  container:{
    marginBottom: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 3
  },
});

export default App;
