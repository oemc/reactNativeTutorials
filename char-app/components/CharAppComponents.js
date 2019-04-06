import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

function Card(props) {
    return (<View style={styles.card}>{props.children}</View>);
}

function Input(props) {
    return (
        <View style={styles.columnContainer}>
            <Bold><ComplementaryText text={props.title}/></Bold>
            <TextInput style={styles.input}
                        onChangeText={props.onChangeText}
                        onSubmitEditing={props.onSubmitEditing}/>
        </View>
    )
}

function Button(props) {
    return (
        <TouchableHighlight style={styles.buttonTouchable}
                                onPressOut={props.onPress}
                                accessibilityLabel={props.title}>
            <View style={styles.button}>
                <Bold><MainText text={props.title}/></Bold>
            </View>
        </TouchableHighlight>
    );
}

function MainText(props) {
    return (<Text style={[styles.text, styles.mainText]}>{props.text}</Text>);
}

function ComplementaryText(props) {
    return (<Text style={[styles.text, styles.complementaryText]}>{props.text}</Text>);
}

function Bold(props) {
    return (<Text style={[styles.text, styles.boldText]}>{props.children}</Text>);
}

export { Card, Input, Button, MainText, ComplementaryText, Bold };