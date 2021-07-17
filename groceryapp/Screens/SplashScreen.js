import React from 'react';
import {StatusBar, View, Text, ActivityIndicator} from 'react-native';
import logo from '../Assets/OK_splash_screen.mp4';
import Video from 'react-native-video';

export class SplashScreen extends Component {
  constructor(props) {
    super(props);
    // setTimeout(() => {
    //   this.props.navigation.navigate('Home');
    // }, 500);
  }
  rende;
  render() {
    return (
      // <Video
      //   source={require('../Assets/OK_splash_screen.mp4')}
      //   style={{flex: 1}}
      // />
      <View>
        <Text>Helllo</Text>
      </View>
    );
  }
}

export default SplashScreen;
