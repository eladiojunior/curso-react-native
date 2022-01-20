import {StyleSheet} from 'react-native';

const styleApp = StyleSheet.create({
    areaBolas: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 5
    },
    bola: {
        height: 40,
        width: 40,
        backgroundColor: "#bbb",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        margin: 5
    },
    textoBola: {
        fontSize: 18,
        fontWeight: "bold",
    },
    campoTexto: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
    },
    areaApp: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    textoGrande: {
        fontSize: 24,
        textAlign: 'center'
    },
    textoGrandeDestaque: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    display: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 5,
        width: 300
    },
    textoDisplay: {
        fontSize: 24,
        textAlign: 'right',
        color: '#FFF',
    },
    areaBotoesContador: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
});
export default styleApp;
