import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import HelloWorldApp from './components/hello';
import Bananas from './components/imgProp';
import LotsOfGreetings from './components/greetingProps';
import BlinkApp from './components/blinkState'
import LotsOfStyles from './components/lotsOfStyles';
import FlexDimensionsBasics from './components/flexDimensionsBasics';
import PizzaTranslator from './components/textInput';
import ButtonBasics from './components/buttonBasics';
import Touchables from './components/touchables';

export default class reactBasic extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <HelloWorldApp />
          <Bananas />
          <LotsOfGreetings />
          <BlinkApp />
          <LotsOfStyles />
          <FlexDimensionsBasics />
          <PizzaTranslator />
          <ButtonBasics />
          <Touchables />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});