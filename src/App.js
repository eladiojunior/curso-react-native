import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Estilo from './componentes/estilo';
import Mega from './componentes/mega/Mega';

//import Primeiro from './componentes/Primeiro';
//import Comp, {Comp1, Comp2} from './componentes/Multi';
//import MinMax from './componentes/MinMax';
//import Aleatorio from './componentes/Aleatorio';
//import Titulo from './componentes/Titulo';
//import Botao from './componentes/Botao';
//import Contador from './componentes/contador/Contador';
//import DiretaPai from './componentes/comunicacao_direta/DiretaPai';
//import IndiretaPai from './componentes/comunicacao_indireta/IndiretaPai';
//import DiferencaOS from './componentes/DiferencaOS';
//import ParOuImpar from './componentes/ParOuImpar';
//import Familia from './componentes/relacao/Familia';
//import Quadrado from './componentes/layout/Quadrado';
//import Membro from './componentes/relacao/Membro';
//import UsuarioLogado from './componentes/UsuarioLogado';
//import ListaProdutos from './componentes/produtos/ListaProdutos';
//import ListaProdutosFlatList from './componentes/produtos/ListaProdutosFlatList';
//import DigiteSeuNome from './componentes/DigiteSeuNome';
//import FlexBoxV1 from './componentes/layout/FlexBoxV1';
//import FlexBoxV2 from './componentes/layout/FlexBoxV2';
//import FlexBoxV3 from './componentes/layout/FlexBoxV3';
//import FlexBoxV4 from './componentes/layout/FlexBoxV4';

const App = function () {
  return (
        <SafeAreaView style={Estilo.areaApp}>
            <Mega qtdNumeros={6}/>
            {/*
                <FlexBoxV4/>
                <FlexBoxV3/>
                <FlexBoxV2/>
                <FlexBoxV1/>
                <Quadrado cor="#ff801a"/>
                <DigiteSeuNome/>
                <ListaProdutosFlatList/>
                <ListaProdutos/>
                <UsuarioLogado usuario={{nome:"Eladio Júnior", email:"eladiojunior@gmail.com"}}/>
                <UsuarioLogado usuario={{nome:"Eladio Júnior"}}/>
                <UsuarioLogado usuario={{nome:"eladiojunior@gmail.com"}}/>
                <UsuarioLogado usuario={null}/>
                <UsuarioLogado usuario={{}}/>
                <Familia sobrenome="Mendes Magalhães">
                    <Membro nome="Daniela" sobrenome="Mendes Magalhães"/>
                    <Membro nome="Beatriz" sobrenome="Mendes Magalhães"/>
                    <Membro nome="Gustavo" sobrenome="Mendes Magalhães"/>
                </Familia>
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
