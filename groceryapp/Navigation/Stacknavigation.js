import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNaviagtion from './DrawerNaviagtion';

const Stack = createStackNavigator();
export class Stacknavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={DrawerNaviagtion}
        />
      </Stack.Navigator>
    );
  }
}

export default Stacknavigation;
