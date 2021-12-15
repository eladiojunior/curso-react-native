import React, {Fragment, useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo';
// Mudança de 'export default (props)' ==> Utilizando o 'destructuring' do JavaScript...
export default ({inicial = 1, faixa = 0}) => {
    const [numero, setNumero] = useState(inicial);
    const add = () => {
        setNumero(numero + faixa);
    }
    const rem = () =>{
        setNumero(numero - faixa);
    }
    return (
        <Fragment>
            <Text style={Estilo.textoGrande}>{numero}</Text>
            <Button title="Add" onPress={add}/>
            <Button title="Rem" onPress={rem}/>
        </Fragment>
    );
}
