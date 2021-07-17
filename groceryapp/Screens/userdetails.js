import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class userdetails extends Component {
  render() {
    return (
      <View style={styles.style}>
        <Text> User details </Text>
      </View>
    );
  }
}

export default userdetails;
const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
