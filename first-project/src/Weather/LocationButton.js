import React from 'react';
import { Button } from 'react-native';

export default class LocationButton extends React.Component {
    _onPress = () => {
        navigator.geolocation.getCurrentPosition(
            position => { 
                this.props.onGetCoords(position.coords.latitude, position.coords.longitude); 
            },
            error => { alert(error.message); },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        return (
            <Button title='Use Current Location'
                    onPress={this._onPress}/>
        );
    }
}