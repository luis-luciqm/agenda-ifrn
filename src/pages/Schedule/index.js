import React from 'react';
import { Text } from 'react-native';

import { 
    ScheduleContainer,
    TextSchedule,
    ViewTexts,
    TextTasks,
    ViewListTasks,
} from './styles'; 

export default function Schedule() {
    return (
        <ScheduleContainer>
            <ViewTexts>
                <TextSchedule>Agenda.IFRN</TextSchedule>
                <TextTasks>Você tem 2 tarefas</TextTasks>
            </ViewTexts>
            <ViewListTasks>
                
            </ViewListTasks>
        </ScheduleContainer>
    );
}