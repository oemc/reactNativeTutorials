import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/styles';
import { Card, MainText, ComplementaryText, Bold } from './CharAppComponents';

function _getString(string) {
    return string != null ? string : '';
}

function _getImage(image) {
    return image != null ? {uri: image} : require('../img/no-image.jpg');
}

export default function Character(props){
    return (
        <Card>
            <Image style= {styles.picture} source={_getImage(props.character.picture)}/>
            <View style={[styles.columnContainer, {flex: 1}]}>
                <Bold><MainText text={ _getString(props.character.name) }/></Bold>
                <ComplementaryText text={ `Origin: ${_getString(props.character.origin)}` }/>
                <ComplementaryText text={ `Biography: ${_getString(props.character.bio)}` }/>
            </View>
        </Card>
    );
}