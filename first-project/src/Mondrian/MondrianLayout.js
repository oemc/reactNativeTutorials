import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class MondrianLayout extends React.Component {
    render(){
        return(
            <View style={[styles.vertical, styles.container]}>
                <View style={[styles.horizontal, {flex: 2}]}>
                    <View style={styles.vertical}>
                        <View style={styles.box}/>
                        <View style={styles.box}/>
                    </View>
                    <View style={[styles.box, {flex: 2, backgroundColor: 'red'}]}/>
                </View>
                <View style={styles.horizontal}>
                    <View style={[styles.box, {flex: 2, backgroundColor: 'blue'}]}/>
                    <View style={[styles.box, {flex: 3}]}/>
                    <View style={styles.vertical}>
                        <View style={styles.box}/>
                        <View style={[styles.box, {backgroundColor: 'yellow'}]}/>                    
                    </View>                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 30,
        bottom: 0,
        left: 0,
        right: 0,
    },
    vertical:{
        flex: 1,
        flexDirection: 'column'
    },
    horizontal:{
        flex: 1,
        flexDirection: 'row'
    },
    box: {
        flex: 1,
        borderColor: '#000000',
        borderWidth: 3
    }
});
