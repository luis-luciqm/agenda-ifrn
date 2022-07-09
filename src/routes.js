import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/pages/Login';
import Teste from './pages/Teste';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Teste" component={Teste} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
