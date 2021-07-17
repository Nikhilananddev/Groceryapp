import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Userlist extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.style}>
        <View style={styles.card}>
          <Text style={styles.company}>{this.props.company}</Text>
          <Text style={styles.name}>{this.props.location}</Text>
        </View>
      </View>
    );
  }
}

export default Userlist;
const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  company: {
    fontSize: 18,
    fontWeight: '800',
    marginVertical: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
  },
  card: {
    backgroundColor: '#FFF',
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
