import styled from 'styled-components';

export const ScheduleContainer = styled.View`
    flex: 1;
    background-color: #1DB863;

    width: 100%;
    height: 150px;
    left: 0px;
    top: 0px;
`;

export const TextSchedule = styled.Text`
    width: 153px;
    height: 29px;
    left: 20px;
    top: 61px;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
`;

export const ViewTexts = styled.View`
    justify-content: space-around;
    flex-direction: row;
    top: 10px;
`;

export const TextTasks = styled.Text`
    width: 136px;
    height: 20px;

    top: 65px;

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 133% */

    color: #FFFFFF;
`;

export const ViewListTasks = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    top: 120px;
    height: 84%;
`;