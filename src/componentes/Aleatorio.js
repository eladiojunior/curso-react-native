import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';
export default (props) => {
    const min = props.min || 1;
    const max = props.max || 10;
    const valor = Math.round(Math.random() * (max - min) + min);
    return (
        <View>
            <Text style={Estilo.textoGrande}>Valor aleatório (entre {min} e {max}):</Text>
            <Text style={Estilo.textoGrandeDestaque}>{valor}!</Text>
        </View>
    );
}
