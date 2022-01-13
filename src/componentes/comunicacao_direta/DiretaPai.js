import React, {Fragment} from 'react';
import Filho from './DiretaFilho';

export default (props) => {
    let x = 13;
    let y = 10;
    return (
        <Fragment>
            <Filho x={x} y={y}/>
            <Filho x={x + 100} y={y + 200}/>
        </Fragment>
    );
}
