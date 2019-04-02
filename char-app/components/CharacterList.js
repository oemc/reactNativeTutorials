import React from 'react';
import { FlatList, View } from 'react-native';
import Character from './Character';        
import styles from '../styles/styles';

import mockData from '../mockData';

export default class CharacterList extends React.Component {
    constructor(props) {
        super(props);
        this.state= { data: this._getData() };
    }

    _getData = () => {
        return mockData;
    }

    _renderItem = ({ item }) => {
        return( <Character character={item}/>);
    }

    render() {
        return (
            <View style={styles.rowContainer}>
                <FlatList data={this.state.data} renderItem={this._renderItem}/>
            </View>
        );
    }
}