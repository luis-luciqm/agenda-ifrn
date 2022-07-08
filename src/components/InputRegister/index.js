import React from 'react';
import { InputRegisterStyle } from './styles';

export default function InputRegister(props){

    console.log('\n\n\n\n\n\n\n\aaaaaaaaaaaaaaaaaaaaa\n\n\n', props)

    return (
        <InputRegisterStyle placeholder={props.placeholder} />
    )
}