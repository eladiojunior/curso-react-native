import React from 'react';
import Primeiro from './componentes/Primeiro';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Comp, {Comp1, Comp2} from './componentes/Multi';
import Estilo from './componentes/estilo';
import MinMax from './componentes/MinMax';
import Aleatorio from './componentes/Aleatorio';
import Titulo from './componentes/Titulo';
import Botao from './componentes/Botao';
import Contador from './componentes/contador/Contador';
import DiretaPai from './componentes/comunicacao_direta/DiretaPai';
import IndiretaPai from './componentes/comunicacao_indireta/IndiretaPai';
import DiferencaOS from './componentes/DiferencaOS';
import ParOuImpar from './componentes/ParOuImpar';
import Pai from './componentes/relacao/Pai';
const App = function () {
  return (
        <SafeAreaView style={Estilo.areaApp}>
            <Pai/>
            {/*
                <ParOuImpar numero={20}/>
                <DiferencaOS/>
                <Contador/>
                <IndiretaPai/>
                <DiretaPai/>
                <Contador inicial={10} faixa={5}/>
                <Botao titulo="Executar"/>
                <Titulo titulo="Cadastro de Usuário" subtitulo="Registrar novo usuário"/>
                <Aleatorio min={1} max={60}/>
                <MinMax min={1} max={20} />
                <Comp2 />
                <Comp1 />
                <Comp />
                <Primeiro />
            */}
        </SafeAreaView>
    );
};
export default App;
