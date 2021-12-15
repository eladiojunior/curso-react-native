import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default (props) => {
    return (
      <Fragment>
          <Text style={Estilo.textoGrandeDestaque}>{props.titulo}</Text>
          <Text>{props.subtitulo}</Text>
      </Fragment>
    );
}
