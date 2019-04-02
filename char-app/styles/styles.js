import { StyleSheet } from 'react-native';

const mainColor = '#3daa8d';
const secundaryColor = '#7ea89d'
const borderColor = '#000000';
const fontcolor = "#032b21";

const styles = StyleSheet.create({
    background: {
        backgroundColor: secundaryColor
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        alignSelf: 'flex-start'
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },
    card: {
        height: 140,
        flex: 1,
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
        alignSelf: 'flex-start',
        backgroundColor: secundaryColor,
        borderWidth: 1,
        borderColor: borderColor,
        width: 150,
        height: 25
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