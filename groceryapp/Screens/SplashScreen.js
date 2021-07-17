import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import logo from '../Assets/OK_splash_screen.mp4';
import Video from 'react-native-video';

export class SplashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 4000);
  }
  rende;
  render() {
    return (
      <Video
        source={require('../Assets/OK_splash_screen.mp4')}
        style={styles.backgroundVideo}
      />
      // <View>
      //   <Text>Helllo</Text>
      // </View>
    );
  }
}

export default SplashScreen;
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
  },
});
