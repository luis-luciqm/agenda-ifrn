import React from 'react';
import { Image, Text, Alert } from 'react-native';

import { 
    Container,
    TextIfrn,
    InputStyle,
    ButtonLogin,
    TextButton,
} from './styles';  

export default function Login({navigation}){
    return (
        <Container>
            <Image source={require('../../img/logo-if.png')} />
            <TextIfrn>Agenda IFRN</TextIfrn>
            <InputStyle placeholder="Login" />
            <InputStyle placeholder="Senha" />
            <ButtonLogin
            onPress={() => navigation.navigate('Register') }>
                <TextButton>Entrar</TextButton>
            </ButtonLogin>
        </Container>
    )
}
