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
import Familia from './componentes/relacao/Familia';
import Quadrado from './componentes/layout/Quadrado';
import Membro from './componentes/relacao/Membro';
import UsuarioLogado from './componentes/UsuarioLogado';
import ListaProdutos from './componentes/produtos/ListaProdutos';
import ListaProdutosFlatList from './componentes/produtos/ListaProdutosFlatList';
const App = function () {
  return (
        <SafeAreaView style={Estilo.areaApp}>
            <ListaProdutosFlatList/>
            {/*
                <ListaProdutos/>
                <Quadrado/>    
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
