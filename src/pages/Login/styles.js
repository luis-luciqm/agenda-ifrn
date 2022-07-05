import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    background-color: #1DB863;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const TextIfrn = styled.Text`
    width: 172px;
    height: 84px;
    top: 20px;

    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;

    color: #FFFFFF;
`;

export const InputStyle = styled.TextInput`
    top: 40px;
    width: 80%;
    height: 50px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 1px solid #E6E6E6;
    padding-left: 14px;
    margin-bottom: 24px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    top: 38px;
    width: 312px;
    height: 50px;
    background-color: gray;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    font-weight: 800;
    font-size: 20px;
    font-style: normal;
    top: -2px
`;

