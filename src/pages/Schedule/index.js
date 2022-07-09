import React, { useState } from 'react';
import { Text, Image } from 'react-native';
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

    return (
        <ScheduleContainer>
            <ViewTexts>
                <TextSchedule>Agenda.IFRN</TextSchedule>
                <TextTasks>Você tem 2 tarefas</TextTasks>
            </ViewTexts>
            <ViewListTasks>
                { isSelected ?
                    <ViewTasksChecked>
                        <CheckBox
                            disabled={false}
                            value={isSelected}
                            onValueChange={(newValue) => setIsSelected(newValue)}
                            style={{ color: '#1DB863' }}
                        />
                        { isSelected ? <TextTasksListInactive>Tarefa 1</TextTasksListInactive> : <TextTasksList>Tarefa 1</TextTasksList>}
                        <ImageTrash>
                            <Image source={require('../../img/delete.png')} />
                        </ImageTrash>
                    </ViewTasksChecked>
                    :
                    <ViewTasks>
                        <CheckBox
                            disabled={false}
                            value={isSelected}
                            onValueChange={(newValue) => setIsSelected(newValue)}
                        />
                        { isSelected ? <TextTasksListInactive>Tarefa 1</TextTasksListInactive> : <TextTasksList>Tarefa 1</TextTasksList>}
                        <ImageTrash>
                            <Image source={require('../../img/delete.png')} />
                        </ImageTrash>
                    </ViewTasks>
                }

                { isSelected ?
                    <ViewTasksChecked>
                        <CheckBox
                            disabled={false}
                            value={isSelected}
                            onValueChange={(newValue) => setIsSelected(newValue)}
                        />
                        { isSelected ? <TextTasksListInactive>Tarefa 2</TextTasksListInactive> : <TextTasksList>Tarefa 2</TextTasksList>}
                        <ImageTrash>
                            <Image source={require('../../img/delete.png')} />
                        </ImageTrash>
                    </ViewTasksChecked>
                    :
                    <ViewTasks>
                        <CheckBox
                            disabled={false}
                            value={isSelected}
                            onValueChange={(newValue) => setIsSelected(newValue)}
                        />
                        { isSelected ? <TextTasksListInactive>Tarefa 2</TextTasksListInactive> : <TextTasksList>Tarefa 2</TextTasksList>}
                        <ImageTrash>
                            <Image source={require('../../img/delete.png')} />
                        </ImageTrash>
                    </ViewTasks>
                }
            </ViewListTasks>
        </ScheduleContainer>
    );
}