import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
width *= .8;

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{height:300}}>
        <View style={[flexStyle.eightyPercent, flexStyle.flex1]} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const flexStyle = StyleSheet.create({
  eightyPercent: {
    width: width
  },
  flex1: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  flex2: {
    flex:2,
    backgroundColor: 'skyblue'
  },
  flex3: {
    flex:3,
    backgroundColor: 'steelblue'
  }
});