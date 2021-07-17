import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNaviagtion from './DrawerNaviagtion';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();
export class Stacknavigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={DrawerNaviagtion}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={SplashScreen}
        />
      </Stack.Navigator>
    );
  }
}

export default Stacknavigation;
