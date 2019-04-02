import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/styles';
import { Card, MainText, ComplementaryText, Bold } from './CharAppComponents';

export default class Character extends React.Component {
    _getString = (string) => {
        return string != null ? string : '';
    }

    _getImage = (image) => {
        return image != null ? {uri: image} : require('../img/no-image.jpg');
    }

    render() {
        return (
            <Card>
                <Image style= {styles.picture} source={this._getImage(this.props.character.picture)}/>
                <View style={styles.columnContainer}>
                    <Bold><MainText text={ this._getString(this.props.character.name) }/></Bold>
                    <ComplementaryText text={ `Origin: ${this._getString(this.props.character.origin)}` }/>
                    <ComplementaryText text={ `Biography: ${this._getString(this.props.character.bio)}` }/>
                </View>
            </Card>
        );
    }
}