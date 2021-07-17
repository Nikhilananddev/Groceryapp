import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Stacknavigation from './Navigation/Stacknavigation';

export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigation />
    </NavigationContainer>
  );
}

// import React, {Component} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import Stacknavigation from './Navigation/Stacknavigation';
// export class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stacknavigation />
//       </NavigationContainer>
//     );
//   }
// }

// export default App;

// import {NavigationContainer} from '@react-navigation/native';
// import Stacknavigation from './Navigation/Stacknavigation';

// export class App extends PureComponent {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stacknavigation />
//       </NavigationContainer>

//       // <View>
//       //   <Text> textInComponent </Text>
//       // </View>
//     );
//   }
// }

// export default App;
