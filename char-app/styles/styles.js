import { StyleSheet } from 'react-native';

const mainColor = '#3daa8d';
const secundaryColor = '#7ea89d'
const highlightColor = '#21844a'
const borderColor = '#000000';
const fontcolor = "#032b21";

const styles = StyleSheet.create({
    background: {
        backgroundColor: secundaryColor,
        flex: 1
    },
    columnContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        alignItems: 'center'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    card: {
        height: 140,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: mainColor,
        borderWidth: 2,
        borderColor: borderColor,
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    picture: {
        width: 120,
        height: 120
    },
    input:{
        backgroundColor: secundaryColor,
        borderWidth: 1,
        borderColor: borderColor,
        width: 150,
        height: 25
    },
    button: {
        height: 40,
        width: 200,
        backgroundColor: highlightColor,
        borderColor: secundaryColor,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonTouchable: { 
        borderRadius: 10
    },
    text: {
        color: fontcolor
    },
    mainText: {
        textTransform: 'uppercase',
        fontSize: 18
    },
    complementaryText: {
        fontSize: 12
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default styles;