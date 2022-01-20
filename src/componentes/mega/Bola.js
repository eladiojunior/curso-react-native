import React from 'react';
import {View, Text} from 'react-native';
import Style from '../estilo';

export default (props) => {
    const valor = props.valor || "";
    return (
        <View style={Style.bola}>
            <Text style={Style.textoBola}>{valor}</Text>
        </View>
    );
}