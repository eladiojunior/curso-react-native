import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';

import produtos from './dataProdutos';

export default (props) => {
    function listarProdutos() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>{p.id} - {p.nome} R$ {p.preco}</Text>
            );
        });
    }
    return (
        <View>
            <Text style={Estilo.textoGrande}>Lista de Produtos</Text>
            {listarProdutos()}
        </View>
    );
}