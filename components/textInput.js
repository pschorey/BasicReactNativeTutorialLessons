import React, { Component } from 'react';
import { Text, TextInput, View, SafeAreaView } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
        <View style={{}}>
          <TextInput
            style={{height: 30, fontSize: 25, lineHeight: 30, color: 'red'}}
            placeholder="Type here to translate!"
            placeholderTextColor="#000" 
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
    );
  }
}