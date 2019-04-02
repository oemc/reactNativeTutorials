import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles';

class Card extends React.Component {
    render() {
        return (
            <View style={styles.card}>
                {this.props.children}
            </View>
        );
    }
}

class Input extends React.Component {
    render() {
        return (
            <View style={styles.rowContainer}>
                <Bold><ComplementaryText text={this.props.title + ':'}/></Bold>
                <TextInput style={styles.input}
                           onChangeText={this.props.onChangeText}
                           onSubmitEditing={this.props.onSubmitEditing}/>
            </View>
        )
    }
}

class MainText extends React.Component {
    render() {
        return (
            <Text style={[styles.text, styles.mainText]}>{this.props.text}</Text>
        );
    }
}

class ComplementaryText extends React.Component {
    render() {
        return (
            <Text style={[styles.text, styles.complementaryText]}>{this.props.text}</Text>
        );
    }
}

class Bold extends React.Component {
    render() {
        return (
            <Text style={[styles.text, styles.boldText]}>{this.props.children}</Text>
        );
    }
}

export { Card, Input, MainText, ComplementaryText, Bold };