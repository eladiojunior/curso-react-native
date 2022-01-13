import React, {Fragment, useState} from 'react';
import {Text} from 'react-native';
import Filho from './IndiretaFilho';
import Estilo from '../estilo';

export default (props) => {
    const [numero, setNumero] = useState(0);
    const exibirValor = (numero) => {
        setNumero(numero);
    }
    return (
        <Fragment>
            <Text style={Estilo.textoGrande}>{numero}</Text>
            <Filho min={1} max={60} onChange={exibirValor}/>
        </Fragment>

    );
}
