import React from 'react';
import { Text } from 'react-native';
import InputRegister from '../../components/InputRegister';

import { 
    Container,
    TextRegister,
    ButtonRegister,
    TextButtonRegister,
} from './styles';

export default function Register({navigation}){
    return (
        <Container>
            <TextRegister>Cadastro de Tarefa</TextRegister>
            <InputRegister placeholder="Título" />
            <InputRegister placeholder="Descrição" />
            <InputRegister placeholder="Categorias" />
            <InputRegister placeholder="Data" />

            <ButtonRegister>
                <TextButtonRegister>Cadastrar</TextButtonRegister>
            </ButtonRegister>

        </Container>
    );
}