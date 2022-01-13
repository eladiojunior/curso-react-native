import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    const numero = props.numero || 0;
    return (
        <View>
            <Text>Resultado do número ({numero}):</Text>
            {(numero % 2) === 0
                ? <Text style={Estilo.textoGrande}>Par!</Text>
                : <Text style={Estilo.textoGrande}>Impar!</Text>
            };
        </View>
    )
}
