import React from 'react';
import { View, StatusBar } from 'react-native';
import CharacterList from './components/CharacterList';
import CharacterCreate from './components/CharacterCreate';
import styles from './styles/styles';

import mockData from './mockData';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: mockData};
  }

  _addCharacter = (character) => {
    character.key = this.state.data.length.toString();
    this.setState({data: [...this.state.data, character]});
  }

  render() {
    return (
      <View style={styles.background}>
        <StatusBar hidden/>
        <View style={styles.columnContainer}>
          <CharacterCreate addCharacter={this._addCharacter}/>
          <CharacterList data={this.state.data}/>
        </View>
      </View>
    );
  }
}