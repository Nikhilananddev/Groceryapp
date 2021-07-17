import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Alert from '../Screens/Alert';
import Helper from '../Screens/Helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from '../Screens/Home';

const Tab = createBottomTabNavigator();
export class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={30} color="#30D5C7" />
            ),
          }}
        />
        <Tab.Screen
          name="Alert"
          component={Alert}
          options={{
            tabBarLabel: 'alert',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="notifications" size={30} color="#30D5C7" />
            ),
          }}
        />
        <Tab.Screen
          name="Helper"
          component={Helper}
          options={{
            tabBarLabel: 'Help',
            tabBarIcon: ({color, size}) => (
              <Entypo name="help" size={30} color="#30D5C7" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTab;
