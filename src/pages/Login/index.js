import React from 'react';
import { Image } from 'react-native';

import { 
    Container,
    TextIfrn,
} from './styles';  

import Input from '../../components/Input';

export default function Login({navigation}){
    return (
        <Container>
            <Image source={require('../../img/logo-if.png')} />
            <TextIfrn>Agenda IFRN</TextIfrn>
            <Input />
        </Container>
    )
}
