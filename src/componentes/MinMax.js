import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo'
export default (props) => {
    let min = props.min || 0;
    let max = props.max || 0;
    return (
        <Text style={Estilo.textoGrande}> O valor { max } é maior que o valor { min }.</Text>
    )
}
