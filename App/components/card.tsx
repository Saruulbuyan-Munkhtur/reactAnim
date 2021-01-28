/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Card = ({district, title, address, price, image}) => (
  <View style={styles.component}>
    <View>
      <Image
        style={styles.image}
        source={image}
      />
    </View>
    <View style={styles.bottomSection}>

      <View style={styles.detailView}>
        <Text style={styles.district}>{district}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  component:{
    width: 311,
    height: 323,
    borderRadius: 16,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    marginHorizontal: 16
  },
  bottomSection: {
    padding: 16,
    width: 311,
    height: 115,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montreux Classic',
    lineHeight: 18.4,
    fontWeight: '500',
    color: '#111214',
    letterSpacing: 0.01,
    alignSelf: 'stretch',
    marginTop: 4,

  },
  image: {
    width: 311,
    height: 200,
    top: 0,
    left: 0,
    alignSelf: 'stretch',
  },
  detailView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,

    width: 279,
    height: 83,
  },
  district: {
    fontSize: 10,
    fontFamily: 'Montreux Grotesk Soft',
    fontWeight: '700',
    lineHeight: 11.5,
    letterSpacing: 0.025,
    color: '#696f7a',
    alignSelf: 'stretch',
  },
  address: {
    fontSize: 12,
    fontFamily: 'Montreux Classic',
    lineHeight: 13.8,
    letterSpacing: 0.01,
    color: '#b68401',
    alignSelf: 'stretch',
    marginTop: 8
  },
  price: {
    fontSize: 14,
    fontFamily: 'Montreux Classic',
    lineHeight: 16.1,
    letterSpacing: 0.01,
    color: '#111214',
    alignSelf: 'stretch',
    marginTop: 12
  }
});

export default Card;
