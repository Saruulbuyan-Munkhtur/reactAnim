/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from './card';

const apartmentData = [
  {
    district: 'Upper West Side',
    title: 'The Belnord Apartments',
    address: '225 W 86th St, New York, NY, 10024',
    price: '$5,250/month',
    image: require('../assets/apartment1.png'),
  },
  {
    district: 'Dumbo',
    title: '60 Water Street',
    address: '60 Water St, Brooklyn, NY, 11201',
    price: '$3,000/month',
    image: require('../assets/apartment2.jpg'),
  },
  {
    district: 'Lower East Side',
    title: 'The Rollins',
    address: '145 Clinton St, New York, Ny, 10002',
    price: '$3,200/month',
    image: require('../assets/apartment3.jpg'),
  },
  {
    district: 'Lower East Side',
    title: 'Seward Park Housing',
    address: '413 Grand St, New York, NY, 10002',
    price: '$8,250/month',
    image: require('../assets/apartment4.jpg'),
  },
];


const CardCarousel = () => (
  <FlatList
    data={apartmentData}
    renderItem={({ item, index, separators }) => (
      <Card {...item}/>
    )}
    horizontal={true}
    style={styles.container}
    />
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 125,
  },
});

export default CardCarousel;
