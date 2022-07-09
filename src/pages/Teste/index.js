import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../Register';
import Schedule from '../Schedule';

const Tab = createBottomTabNavigator();

export default function Teste(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="Schedule" component={Schedule} />
        </Tab.Navigator>
    );
}

