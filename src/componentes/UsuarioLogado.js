import React from 'react';
import {View, Text} from 'react-native';
import If from './If';
export default (props) => {
    const usuario = props.usuario || {};
    return (
        <View>
            <If condicao={usuario && usuario.nome && usuario.email}>
                <Text>Usuario Logado</Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </View>
    );
}