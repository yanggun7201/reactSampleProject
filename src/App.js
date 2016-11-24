'use strict';

import React, { Component } from 'react';
import { Text, Navigator, StyleSheet, TouchableHighlight } from 'react-native';
//var TopicList = require('./TopicList');

var App = React.createClass({
  render() {
  const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];

    return (
      <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) =>
              <TouchableHighlight onPress={() => {
                if (route.index === 0) {
                  navigator.push(routes[1]);
                } else {
                  navigator.pop();
                }
              }}>
              <Text>Hello {route.title}!</Text>
              </TouchableHighlight>
            }
            style={{padding: 100}}
            navigationBar={
                 <Navigator.NavigationBar
                   routeMapper={{
                     LeftButton: (route, navigator, index, navState) =>
                      { return (<Text>Cancel</Text>); },
                     RightButton: (route, navigator, index, navState) =>
                       { return (<Text>Done</Text>); },
                     Title: (route, navigator, index, navState) =>
                       { return (<Text>Awesome Nav Bar</Text>); },
                   }}
                   style={{backgroundColor: 'gray'}}
                 />
              }
          />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

module.exports = App;