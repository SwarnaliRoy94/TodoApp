import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Todos from './components/Todos/Todos';
import TodoDetails from './components/Todos/TodoDetails';
import NewTodo from './components/Todos/NewTodo';

const Stack = createStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator
        headerMode='none'
        initialRouteName='Todos'
    >
        <Stack.Screen
            name='Todos'
            component={Todos}
        />
        <Stack.Screen
            name='TodoDetails'
            component={TodoDetails}
        />
        <Stack.Screen
            name='NewTodo'
            component={NewTodo}
        />
    </Stack.Navigator>
)

export default AppNavigator;