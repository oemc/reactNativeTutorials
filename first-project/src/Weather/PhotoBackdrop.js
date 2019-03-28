import React from 'react';
import { StyleSheet, ImageBackground, Button } from 'react-native';
import { ImagePicker } from 'expo';

export default class PhotoBackDrop extends React.Component {
    constructor(props){
        super(props);
        this.state = { photoSource: require('./flowers.png') };
    }

    _pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true
        });
        console.log(result);
        if(!result.cancelled) {
            this.setState({ photoSource: {uri: result.uri} });
        }
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                             source={this.state.photoSource}
                             resizeMode='cover'>
                <Button title='Cambiar imagen' onPress={this._pickImage}/>
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    }
})