import { useNavigation } from '@from-navigation/native';
import React, { createContext, useState } from 'react';

export const LoginContext = createContext({});

function AuthProvider({ children }){
    const[user, setUser] = useState({});
    const navigation = useNavigation();

    function login(email, password){
        setUser({
            email: email,
            status: 'Ativo'
        });

        navigation.navigate('Teste');
    }

    return (
        <LoginContext.Provider value={{ value: "Luís Lucilandio", login, user }}>
            { children }
        </LoginContext.Provider>
    )

}

export default AuthProvider;

