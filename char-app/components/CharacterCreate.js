import React from 'react';
import { View, Text, Button } from 'react-native';
import { ImagePicker } from 'expo';
import { Input } from './CharAppComponents';
import Character from './Character';
import styles from '../styles/styles';

export default class CharacterCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = { character: {} };
    }

    _onImageButtonPress = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true
        });
        if(!result.cancelled) {
            this._onPropertyChange('picture', result.uri);
        }
    }

    _onNameChange = text => { this._onPropertyChange('name', text); }
    _onOriginChange = text => { this._onPropertyChange('origin', text); }
    _onBioChange = text => { this._onPropertyChange('bio', text); }
    
    _onPropertyChange = (key, value) => {
        let newCharacter = this.state.character;
        newCharacter[key] = value;
        this.setState({ character: newCharacter });
    }

    render() {
        return (
            <View style={styles.columnContainer}>
                <Character character={this.state.character}/>
                <View style={styles.columnContainer}>
                    <View style={styles.rowContainer}>
                        <Input title={'Name'} onChangeText={this._onNameChange}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <Input title={'Origin'} onChangeText={this._onOriginChange}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <Input title={'Biography'} onChangeText={this._onBioChange}/>
                    </View>
                    <Button title={'Seleccionar Imagen'} onPress={this._onImageButtonPress}/>
                </View>
            </View>
        );
    }
}