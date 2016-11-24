/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './src/App';
import NavigationBarSample from './src/NavigationBarSample';
import ToolbarAndroidExample from './src/UIExplorer/js/ToolbarAndroidExample.android';
import UIExplorerApp from './src/UIExplorer/js/UIExplorerApp.android';
import ViewPagerAndroidExample from './src/UIExplorer/js/ViewPagerAndroidExample.android';
import AccessibilityAndroidExample from './src/UIExplorer/js/AccessibilityAndroidExample.android';
import UIExplorerList from './src/UIExplorer/js/UIExplorerList.android';
AppRegistry.registerComponent('reactSampleProject', () => UIExplorerApp);
// AppRegistry.registerComponent('reactSampleProject', () => NavigationBarSample);

//
// export default class reactSampleProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

//AppRegistry.registerComponent('reactSampleProject', () => reactSampleProject);
