import React, { useState } from 'react';
import { Text } from 'react-native';
import InputRegister from '../../components/InputRegister';
import RNPickerSelect from 'react-native-picker-select';
import { ViewInputPicker } from './styles';
import DatePicker from 'react-native-datepicker'

import { 
    Container,
    TextRegister,
    ButtonRegister,
    TextButtonRegister,
} from './styles';

export default function Register({navigation}){

    const [date, setDate] = useState(new Date())

    return (
        <Container>
            <TextRegister>Cadastro de Tarefa</TextRegister>
            <InputRegister placeholder="Título" />
            <InputRegister placeholder="Descrição" />
            
            <ViewInputPicker>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[

                        { label: 'Selecione o tipo de tarefa', value: '0' },
                        { label: 'Tarefa de Casa', value: '1' },
                        { label: 'Tarefa de Estudo', value: '2' },
                        { label: 'Tarefa de Trabalho', value: '3' },
                        { label: 'Tarefa de Lazer', value: '4' },
                        { label: 'Tarefa de Outros', value: '5' },
                        
                    ]}
                />
            </ViewInputPicker>

            <DatePicker date={date} onDateChange={setDate} />

            <ButtonRegister>
                <TextButtonRegister
                    onPress={() => navigation.navigate('Listar Tarefa')}
                >Cadastrar</TextButtonRegister>
            </ButtonRegister>

        </Container>
    );
}