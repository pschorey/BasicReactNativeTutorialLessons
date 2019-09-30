import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={bananaStyles.pic}/>
    );
  }
}

const bananaStyles = StyleSheet.create({
  pic: {
    width: 386,
    height: 220,
    borderRadius: 15,
    margin:10
  },
});