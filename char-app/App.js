import React from 'react';
import { View, StatusBar } from 'react-native';
import CharacterList from './components/CharacterList';
import CharacterCreate from './components/CharacterCreate';
import styles from './styles/styles';

export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.columnContainer, styles.background]}>
        <StatusBar hidden/>
        <CharacterCreate/>
        <CharacterList/>
      </View>
    );
  }
}