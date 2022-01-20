import React from 'react';
import {View, Text} from 'react-native';
import Estilo from '../estilo';
import Bola from './Bola';

class Mega extends React.Component {
    render() {
        let numero = this.props.qtdNumeros || 0;
        return (
            <View>
                <Text style={Estilo.textoGrandeDestaque}>Gerado da Mega-Sena</Text>
                <Text style={Estilo.textoGrande}>{numero}</Text>
                <View style={Estilo.areaBolas}>
                    <Bola valor="0"/>
                    <Bola valor="0"/>
                </View>
            </View>
        );
    }
}
export default Mega;