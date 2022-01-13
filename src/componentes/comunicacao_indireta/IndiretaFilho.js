import React, {Fragment} from 'react';
import {Button} from 'react-native';

export default (props) => {
    const aleatorio = (min, max) => {
        const fator = max - min + 1;
        return parseInt(Math.random() * fator) + min;
    }
    return (
        <Fragment>
            <Button title="Comunicação"
                    onPress={
                        function (){
                            const valor = aleatorio(props.min, props.max);
                            props.onChange(valor);
                        }
                    }/>
        </Fragment>
    );
}
