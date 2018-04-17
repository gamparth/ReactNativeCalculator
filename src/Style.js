import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#CAD3C8'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#2C3A47'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    

    inputButtonText: {
        fontSize: 22, 
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    displayText: {
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    }
});

export default Style;