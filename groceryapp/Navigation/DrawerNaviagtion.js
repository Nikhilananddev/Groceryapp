import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import userdetails from '../Screens/userdetails';
import productcatagories from '../Screens/productcatagories';
import Wholesellers from '../Screens/Wholesellers';
import yourorder from '../Screens/yourorder';
import language from '../Screens/language';
import support from '../Screens/support';
import BottomTab from './BottomTab';
const Drawer = createDrawerNavigator();

export class DrawerNaviagtion extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTab} />
        <Drawer.Screen name="Name" component={userdetails} />
        <Drawer.Screen name="catagories" component={productcatagories} />
        <Drawer.Screen name="Wholesellers" component={Wholesellers} />
        <Drawer.Screen name="yourorder" component={yourorder} />
        <Drawer.Screen name="language" component={language} />
        <Drawer.Screen name="support" component={support} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNaviagtion;
