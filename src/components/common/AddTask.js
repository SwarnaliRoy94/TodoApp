import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const dim = 20;

const styles = {
    container: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    },
    button: {
        backgroundColor: '#B4A4F1',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15
    }
}

const AddTask = ({ navigation, addTodo }) => {

    // const size = {Todos.length};
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('NewTodo')
                }}
                style={styles.button}
            >
                <Text style={styles.textStyle}>Add New Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTask;