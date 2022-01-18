import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Estilo from '../estilo';

import produtos from './dataProdutos';

export default (props) => {
    const produtoRender = (( {item: p} ) => {
        <Text key={p.id}>{p.id} - {p.nome} R$ {p.preco}</Text>
    });
    return (
        <View>
            <Text style={Estilo.textoGrande}>Lista de Produtos - FlatList</Text>
            <FlatList 
                data={produtos}
                keyExtractor={p => p.id}
                renderItem={produtoRender}
            />
        </View>
    );
}