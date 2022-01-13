import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import Estilo from '../estilo';

export default (props) => {
    return (
        <View style={Estilo.display}>
            <Text style={Estilo.textoDisplay}>{props.numero}</Text>
        </View>
    );
}
