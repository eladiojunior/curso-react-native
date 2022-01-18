import React from 'react';
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo';

import produtos from './dataProdutos';

export default (props) => {
    const produtoRender = (( {item: p} ) => {
        return <Text>{p.id} - {p.nome} R$ {p.preco}</Text>
    });
    return (
        <>
            <Text style={Estilo.textoGrande}>Lista de Produtos - FlatList</Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    );
}