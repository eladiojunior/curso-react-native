import React, {Fragment, useState} from 'react';
import {Text, Button} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default (props) => {
    const [numero, setNumero] = useState(0);
    const add = () => {
        setNumero(numero + 1);
    }
    const rem = () => {
        setNumero(numero - 1);
    }

    return (
        <Fragment>
            <Text style={Estilo.textoGrande}>Contador Componentizado</Text>
            <ContadorDisplay numero={numero}/>
            <ContadorBotoes add={add} rem={rem}/>
        </Fragment>
    );
}
