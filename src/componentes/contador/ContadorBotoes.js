import React from 'react';
import {Button, View} from 'react-native';
import Estilo from '../estilo';
export default (props) => {
    return (
        <View style={Estilo.areaBotoesContador}>
            <Button style={Estilo.button} title="+" onPress={props.add}/>
            <Button style={Estilo.button} title="-" onPress={props.rem}/>
        </View>
    );
}
