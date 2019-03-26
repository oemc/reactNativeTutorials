import React from 'react';
import { StyleSheet, ImageBackground, CameraRoll, PermissionsAndroid, Button } from 'react-native';
import RequestPermission from '../RequestPermission';

export default class PhotoBackDrop extends React.Component {
    constructor(props){
        super(props);
        this.state = { photoSource: require('./flowers.jpg') };
    }

    _onPressButton = () => {
        RequestPermission.checkPermissions().then(response => {
            if (response === PermissionsAndroid.RESULTS.GRANTED){
                CameraRoll.getPhotos({first: 1}).then(data => {
                    this.setState({ photoSource: {uri: data.edges[3].node.image.uri} });
                    }, error => { console.warn(error); });
            }
        }, err => { console.warn(err) });
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                             source={this.state.photoSource}
                             resizeMode='cover'>
                {this.props.children}
                <Button title='Cambiar imagen' onPress={this._onPressButton}/>
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