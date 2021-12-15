import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';
function CompPadrao() {
  return <Text style={Estilo.textoGrande}>Compomente Padrão</Text>;
}
function Comp1() {
  return <Text style={Estilo.textoGrande}>Compomente 1</Text>;
}
function Comp2() {
  return <Text style={Estilo.textoGrande}>Compomente 2</Text>;
}
export {Comp1, Comp2};
export default CompPadrao;
