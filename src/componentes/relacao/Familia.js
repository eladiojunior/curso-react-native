import React, {Fragment} from 'react';
import {Text} from 'react-native';
export default (props) => {
    return (
        <Fragment>
            <Text>Família [{props.sobrenome || "Sem sobrenome"}]</Text>
            {props.children}
        </Fragment>
    );
}