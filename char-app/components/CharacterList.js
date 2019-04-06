import React from 'react';
import { FlatList, View } from 'react-native';
import Character from './Character';        
import styles from '../styles/styles';

function _renderItem({ item }) {
    return( <Character character={item}/>);
}

export default function CharacterList(props) {
    return (
        <View style={styles.rowContainer}>
            <FlatList data={props.data} renderItem={_renderItem}/>
        </View>
    );
}