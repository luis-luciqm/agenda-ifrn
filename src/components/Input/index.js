import React from 'react';
import { InputStyle } from './styles';

export default function Input(props){

    console.log('\n\n\n', props)

    return (
        <InputStyle placeholder={props.placeholder} />
    )
}