import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
