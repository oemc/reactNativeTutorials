import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open-weather-map';
import LocationButton from './LocationButton';
import PhotoBackdrop from './PhotoBackdrop';
import RequestPermission from '../RequestPermission';

export default class WeatherProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {zip:"", forecast: null};
    }

    componentDidMount() {
        RequestPermission.checkPermissions().then(response => { console.log(response) }, 
                                                  err => { console.log('Error while permission request', err)});
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap._getForecastForZip(zip).then(newForecast => {
            this.setState({forecast: newForecast});
        });
    }

    _handleCoordsUpdate = (lat, lon) => {
        OpenWeatherMap._getForecastForCoords(lat, lon).then(newForecast => {
            this.setState({forecast: newForecast});
        });
    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast main={this.state.forecast.main}
                          description={this.state.forecast.description}
                          temp={this.state.forecast.temp}/>
            );
        }
        return(
            <View style={styles.container}>
                <PhotoBackdrop style={styles.backdrop}>
                    <View style={styles.overlay}>
                        <View style={styles.row}>
                            <Text style={styles.mainText}>
                                Current weather for
                            </Text>
                            <View style={styles.zipContainer}>
                                <TextInput style={[styles.zipCode, styles.mainText]}
                                           onSubmitEditing={this._handleTextChange} />    
                            </View>
                        </View>
                        <LocationButton onGetCoords={this._handleCoordsUpdate}/>
                        {content}
                    </View>
                </PhotoBackdrop>
            </View>
        );
    }
}

const baseFontSize = 16;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
    },
    backdrop: { 
        flex: 1, 
        flexDirection: "column" 
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: "#000000",
        opacity: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    zipContainer: {
        height: baseFontSize + 10,
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3
    },
    zipCode: { 
        flex: 1, 
        flexBasis: 1, 
        width: 150, 
        height: baseFontSize 
    },
    mainText: { 
        fontSize: baseFontSize, 
        color: "#FFFFFF" 
    },
});
  