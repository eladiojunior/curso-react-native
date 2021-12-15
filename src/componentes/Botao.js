import React, {Fragment} from 'react';
import {Button} from 'react-native';
import Estilo from './estilo';
export default (props) => {
    function executar() {
        console.warn('Executar #01');
    }
    return (
        <Fragment>
            <Button title="Executar #01"
                    onPress={executar}/>
            <Button title="Executar #02"
                    onPress={function () {
                console.warn("Executar #02");
            }}/>
            <Button title="Executar #03"
                    onPress={() => console.warn("Executar #03")}/>
        </Fragment>
    )
}
