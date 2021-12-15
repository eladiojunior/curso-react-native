import React from 'react';
import Primeiro from './componentes/Primeiro';
import {View, StyleSheet} from 'react-native';
import Comp, {Comp1, Comp2} from './componentes/Multi';
import Estilo from './componentes/estilo';
import MinMax from './componentes/MinMax';
import Aleatorio from './componentes/Aleatorio';
import Titulo from './componentes/Titulo';
import Botao from './componentes/Botao';
import Contador from './componentes/Contador';

const App = function () {
  return (
        <View style={Estilo.areaApp}>
            <Contador inicial={10} faixa={5}/>
            {/*
                <Botao titulo="Executar"/>
                <Titulo titulo="Cadastro de Usuário" subtitulo="Registrar novo usuário"/>
                <Aleatorio min={1} max={60}/>
                <MinMax min={1} max={20} />
                <Comp2 />
                <Comp1 />
                <Comp />
                <Primeiro />
            */}
        </View>
    );
};
export default App;
