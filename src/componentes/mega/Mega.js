import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Estilo from '../estilo';
import Bola from './Bola';
import Checkbox from '../forms/CheckboxButton';

class Mega extends React.Component {
    
    /* Forma simplificada de recuperar as propos */
    state = {
        qtdNumeros: this.props.qtdNumeros || 6,
        numerosMegaSena: [],
        isSelectedOrdenar: false
    }
    render() {
        return (
            <View>
                <Text style={Estilo.textoGrandeDestaque}>Gerado da Mega-Sena</Text>
                <TextInput 
                    keyboardType={"numeric"}
                    style={Estilo.campoTexto}
                    placeholder="Qtd de Números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}/>
                <Checkbox 
                    label="Ordenar os números" 
                    onSelected={this.alterarSelectedOrdem}/>
                <Button title="Gerar" 
                    onPress={this.gerarNumerosMegaSena}/>
                <View style={Estilo.areaBolas}>
                    {this.exibirNumerosMegaSena()}
                </View>
            </View>
        );
    }

    /**
     * Altera a quantidade de numeros a ser gerado.
     */
    alterarSelectedOrdem = (valor) => {
        this.setState({isSelectedOrdenar: valor});
    }

    /**
     * Altera a quantidade de numeros a ser gerado.
     */
    alterarQtdNumero = (qtd) => {
        let qtdNum = +qtd || 6
        if (qtdNum > 60) 
            qtdNum = 60;
        this.setState({qtdNumeros: qtdNum});
    }

    /**
     * Recupera um número único entre 1 e 60 que não exista no Array de números.
     */
    obterNumeroUnico = (arrayNums) => {
        const novoNum = parseInt(Math.random() * 60) + 1;
        return arrayNums.includes(novoNum) ? this.obterNumeroUnico(arrayNums) : novoNum;
    }

    /**
     * Gera os números da Mega Sena conforme a quantidade de números informado.
     */
    gerarNumerosMegaSena = () => {
        let numeros = Array(this.state.qtdNumeros)
            .fill().reduce(n => [...n, this.obterNumeroUnico(n)], []);
        if (this.state.isSelectedOrdenar) 
            numeros.sort((a,b) => a - b);
        this.setState({numerosMegaSena: numeros});
    }

    exibirNumerosMegaSena = () => {
        if (this.state.numerosMegaSena.length === 0)
            return null;
        return this.state.numerosMegaSena.map(item => {
            return <Bola key={`${item}`} valor={item}/>
        });
    }

    /* Utilizando com o contructor... de recuperar as propos
    constructor(props) {
        super(props);
        this.state = {
            qtdNumeros: props.qtdNumeros || 6
        }
    }
    */
}
export default Mega;