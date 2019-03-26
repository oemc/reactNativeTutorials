import React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight } from 'react-native';

export default class ButtonApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {pressed: 0};
    }

    _onPressIn = () => {
        this.setState({pressed: 1});
        console.log('bip');
    }
    
    _onLongPress = () => {
        this.setState({pressed: 2});
        console.log('bip');
    }

    _onPressOut = () => {
        this.setState({pressed: 0});
    }

    _onPressStandarButton = () => {
        console.log('bup');
    }

    _returnMessage = () => {
        switch(this.state.pressed) {
            case 0:
                return 'PUSH ME';
            case 1:
                return 'YEP';
            case 2:
                return 'JUST LIKE THAT';
            default:
                return 'PUSH ME';
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.touchable}
                                    onPressIn={this._onPressIn}
                                    onPressOut={this._onPressOut}
                                    onLongPress={this._onLongPress}
                                    accessibilityLabel={'PUSH ME'}>
                    <View style={styles.button}>
                        <Text style={styles.text}>
                            {this._returnMessage()}
                        </Text>
                    </View>
                </TouchableHighlight>
                <Button onPress={this._onPressStandarButton}
                        title='No, Press me'
                        accessibilityLabel='Press this button'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    text: { 
        fontSize: 20, 
        textAlign: "center", 
        margin: 10, 
        color: "#FFFFFF" 
    },
    button: {
        backgroundColor: "#FF0000",
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: "center"
    },
    touchable: { 
        borderRadius: 100 
    },
});