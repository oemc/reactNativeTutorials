import React from 'react';
import { View } from 'react-native';
import { ImagePicker } from 'expo';
import { Input, Button } from './CharAppComponents';
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

    _onSaveButtonPress = () => {
        this.props.addCharacter(this.state.character);
        this.setState({character: {}});
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
                <Input title={'Name'} onChangeText={this._onNameChange}/>
                <Input title={'Origin'} onChangeText={this._onOriginChange}/>
                <Input title={'Biography'} onChangeText={this._onBioChange}/>
                <Button title={'Seleccionar Imagen'} onPress={this._onImageButtonPress}/>
                <Button title={'Guardar'} onPress={this._onSaveButtonPress}/>
            </View>
        );
    }
}