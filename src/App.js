import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ApolloProvider } from 'react-apollo';

import AppContainer from './navigation/AppNavigation';
import client from './apollo/client';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});