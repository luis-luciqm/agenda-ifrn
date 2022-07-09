import React, { useState } from 'react';
import { Text, Image, FlatList, View } from 'react-native';
import CheckBox from 'expo-checkbox';

import { 
    ScheduleContainer,
    TextSchedule,
    ViewTexts,
    TextTasks,
    ViewListTasks,
    ViewTasks,
    TextTasksList,
    TextTasksListInactive,
    ImageTrash,
    ViewTasksChecked,
} from './styles'; 

export default function Schedule() {

    const [isSelected, setIsSelected] = useState(false);

    const Item = ({ title }) => (
        <View >
          <Text>{title}</Text>
        </View>
    );
      
    const renderItem = ({ item }) => (
        <ViewTasksChecked>
            <CheckBox
                disabled={false}
                value={item.checked}
                onValueChange={() => setIsSelected(!item.checked)}
                tintColors={{ true: '#F15927', false: 'black' }}
            />
            { item.checked ? <TextTasksListInactive>{item.description}</TextTasksListInactive> : <TextTasksList>{item.description}</TextTasksList>}
            <ImageTrash>
                <Image source={require('../../img/delete.png')} />
            </ImageTrash>
        </ViewTasksChecked>
    );


    const DATA = [
        {
            id: 1,
            checked: false,
            description: 'Reprovar Alunos'
        },
        {
            id: 2,
            checked: true,
            description: 'Encaminhar Email'
        },
        {
            id: 3,
            checked: true,
            description: 'Fazer Nada'
        },
        {
            id: 4,
            checked: true,
            description: 'é sim'
        }
    ]

    return (
        <ScheduleContainer>
            <ViewTexts>
                <TextSchedule>Agenda.IFRN</TextSchedule>
                <TextTasks>Você tem 2 tarefas</TextTasks>
            </ViewTexts>
            <ViewListTasks>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />
            </ViewListTasks>
        </ScheduleContainer>
    );
}