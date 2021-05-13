import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../common/Header';
import TodoItems from '../common/TodoItem';
import { asset } from '../../assets';
import Avatar from '../common/Avatar';
import NameCard from '../common/NameCard';
import AddTask from '../common/AddTask';
import axios from 'axios';
import { GetTodos } from '../../config';

const styles = {
    wrapper: {
        backgroundColor: '#DBDBDB',
        height: '100%',
        width: '100%',
    },
    viewStyle: {
        paddingHorizontal: 20,
        backgroundColor: '#d9a7c7',
        borderRadius: 25
    }
}

let todosData = [{
    id: 1,
    title: 'task 1',
    description: 'coding'
},
{
    id: 2,
    title: 'task 2',
    description: 'eating'
},
{
    id: 3,
    title: 'task 3',
    description: 'sleeping'
},
{
    id: 4,
    title: 'task 4',
    description: 'going out'
}
]
// {
//     id: 5,
//     title: 'task 5',
//     description: 'playing games'
// },
// {
//     id: 6,
//     title: 'task 6',
//     description: 'playing games'
// },
// {
//     id: 7,
//     title: 'task 7',
//     description: 'playing games'
// },
// {
//     id: 8,
//     title: 'task 8',
//     description: 'playing games'
// },

const Todos = ({ navigation }) => {

    const [todos, setTodos] = useState([]);


    const addTodo = (val) => {
        console.log(val);
        // todosData.push(val)
    };
    // equivalant to componentDidMount
    useEffect(() => {
        GetTodos()
            .then((res) => {
                console.log(res.data);
                setTodos(res.data);
            })
            .catch((e) => {
                console.log(e.response)
            })
    }, [])

    const renderTodos = () => {
        // console.log(todos)
        return todos.map((todo) => {
            return (
                <View
                    key={todo.id}
                    style={{ marginTop: 20 }}
                >
                    <TodoItems
                        id={todo.id}
                        title={todo.title}
                        subtitle="hello"
                        completed={todo.completed}
                        navigation={navigation}
                    />
                </View>
            )
        })
    }

    // const renderTodos = () => (
    //       todosData.map((todo) => 
    //           (
    //               <TodoItems
    //                   title={todo.title}
    //                   subtitle={todo.description}
    //               />
    //           )
    //       )
    //   )

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#fffcdc', '#DAE2F8', '#fffcdc']}
            style={styles.wrapper}
        >
            <Header title='Todos' />
            <Avatar icon={asset.Avatar} />
            <NameCard />
            <View style={{ flexDirection: 'row', height: '45%', alignItems: 'center', margin: 20, borderRadius: 25 }}>
                <ScrollView
                    style={styles.viewStyle}
                >
                    <View>
                        {
                            renderTodos()
                        }
                    </View>
                </ScrollView>
            </View>

            <AddTask navigation={navigation} addTodo={addTodo} />
        </LinearGradient >
    )
}

export default Todos;