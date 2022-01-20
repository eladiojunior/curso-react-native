import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';
import Estilo from './estilo';
import { setEnvironmentData } from 'worker_threads';

export default (props) => {
    let [nome, setNome] = useState('Teste');
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                style={Estilo.campoTexto}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={(nome => {
                    setNome(nome)
                })}/>
        </View>
    );
}