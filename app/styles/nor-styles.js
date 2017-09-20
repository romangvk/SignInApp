import { StyleSheet } from 'react-native';
import { backgroundColor, staticTextColor, activeTextColor } from './colors';
export default norStyles = StyleSheet.create({
    formTitle: {
        backgroundColor: 'transparent',
        color: staticTextColor,
        fontSize: 30,
        alignSelf: 'center'
    },
    sectionTitle: {
        backgroundColor: 'transparent',
        color: staticTextColor,
        fontSize: 20,
    },
    field: {
        flex: 0,
        borderWidth: 2,
        borderRadius: 25,
        padding: 30,
        margin: 20,
        marginBottom: 0
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    listItem: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginLeft: 30
    },
    inlineField: {
        borderWidth: 2,
        borderRadius: 25,
        margin: 20,
        marginBottom: 0
    },
    label: {
        color: activeTextColor,
        backgroundColor: 'transparent',
        fontSize: 10,
        height: 20,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 0
    },
    inlineMain: {
        margin: 30,
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        backgroundColor: 'transparent',
        color: staticTextColor,
        fontSize: 20
    },
    icon: {
        backgroundColor: 'transparent',
        fontSize: 40
    },
    modalGroup: {
        width: 400,
        padding: 1,
        margin: 5,
        borderRadius: 25
    },
    modalOverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000044'
    },
    modalItem: {
        borderRadius: 23,
        backgroundColor: '#ffffff22',
        margin: 1,
        padding: 20,
        alignItems: 'center'
    }
});