/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';

const platformText = { ios: 'iOS', android: 'Android', web: 'Web' };

export default class ExampleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello Hamburg!</Text>
          <Text style={styles.text}>Current platform: {platformText[Platform.OS]}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container   : {
    flex           : 1,
    backgroundColor: '#f5fcff',
  },
  text     : {
    fontSize : 20,
    margin   : 4,
  },
  textContainer: {
    backgroundColor: '#e9eff2',
  },
});
