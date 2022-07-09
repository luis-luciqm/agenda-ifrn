import React from 'react';
import { Text, Image } from 'react-native';

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
} from './styles'; 

export default function Schedule() {
    return (
        <ScheduleContainer>
            <ViewTexts>
                <TextSchedule>Agenda.IFRN</TextSchedule>
                <TextTasks>Você tem 2 tarefas</TextTasks>
            </ViewTexts>
            <ViewListTasks>
                <ViewTasks>
                    <TextTasksList>Tarefa 1</TextTasksList>
                </ViewTasks>
                <ViewTasks>
                    <TextTasksListInactive>Tarefa 2</TextTasksListInactive>
                    <ImageTrash>
                        <Image source={require('../../img/delete.png')} />
                    </ImageTrash>
                </ViewTasks>
            </ViewListTasks>
        </ScheduleContainer>
    );
}