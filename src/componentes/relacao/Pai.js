import React, {Fragment} from 'react';
import Filho from './Filho';

export default (props) => {
    return (
        <Fragment>
            <Filho nome="Beatriz" sobrenome="Magalhaes"></Filho>
            <Filho nome="Gustavo" sobrenome="Magalhaes"></Filho>
        </Fragment>
    );
}
