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
    /* border-top-left-radius: 22px;
    border-top-right-radius: 22px; */
    top: 120px;
    height: 84%;
`;

export const ViewTasks = styled.View`
    flex-direction: row;
    left: 0%;
    right: 0%;
    top: 12%;
    bottom: 0%;
    height: 60px;
    justify-content: space-around;
    align-items: center;

    background: #C4C4C4 0%;
    opacity: 0.24;
`;

export const ViewTasksChecked = styled.View`
    flex-direction: row;
    left: 0%;
    right: 0%;
    top: 12%;
    bottom: 0%;
    height: 60px;
    justify-content: space-around;
    align-items: center;

    background: #FFFFFF 0%;
    opacity: 0.24;
`;

export const TextTasksList = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 17px;

    color: #0d0d0d;
`;

export const TextTasksListInactive = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 17px;
    /* identical to box height */

    text-decoration-line: line-through;

    /* Feito */

    color: #006600;
`;

export const ImageTrash = styled.View`
    
`;