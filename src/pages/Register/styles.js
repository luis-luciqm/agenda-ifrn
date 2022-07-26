import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;

export const TextRegister = styled.Text`
    width: 205px;
    height: 28px;

    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    /* Feito */

    color: #1DB863;
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: 312px;
    height: 57px;
    top: 60px;
    justify-content: center;
    align-items: center;

    background: #1DB863;
    border-radius: 5px;
`;

export const TextButtonRegister = styled.Text`
    width: 78px;
    height: 21px;
    
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
`;

export const ViewInputPicker = styled.View`
    display: flex;
    width: 80%;
    top: 26px;
    border: 1px solid #c2b7b6;	
    border-radius: 5px;
    color: #c2b7b6;
`;