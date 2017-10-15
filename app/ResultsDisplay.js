/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';


import Buttons from './app/Buttons';
import ResultDisplay from './app/ResultDisplay';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello you hunka hunka!</Text>
        <ResultDisplay/>
        <Buttons/>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('App', () => App);
