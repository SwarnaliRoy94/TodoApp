import React, { useState } from 'react';
import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../common/BackButton';
import Header from '../common/Header';

const styles = {
    container: {
        padding: 30,
        width: '90%',
        margin: 20,
        backgroundColor: '#d9a7c7',
        borderRadius: 16
    },
    textStyle: {
        marginBottom: 10,
        fontSize: 18
    },

    inputStyle: {
        backgroundColor: '#F9EDFB',
        borderRadius: 16,
        color: 'black'
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15
    },
    button: {
        backgroundColor: '#FBE3FE',
        padding: 15,
        borderRadius: 20
    }
}

const NewTodo = ({ route, navigation }) => {
    //const { addTodo } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // akash wrote this
    // const handleSubmit = () => {
    //     const payload = {
    //         title,
    //         description
    //     }
    //     addTodo(payload);
    //
    return (
        <View style={{ height: '100%' }}>
            <Header title='New Todo' />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#fffcdc', '#DAE2F8', '#fffcdc']}
                style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
            >
                <View style={styles.container}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={styles.textStyle}>Title</Text>
                        <TextInput
                            placeholder='Type Here'
                            placeholderTextColor='black'
                            value={title}
                            onChangeText={(text) => {
                                setTitle(text);
                            }}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Description</Text>
                        <TextInput
                            placeholder='Type Here'
                            placeholderTextColor='black'
                            value={description}
                            onChangeText={(text) => {
                                setDescription(text);
                            }}
                            style={styles.inputStyle}
                            multiline
                            numberOfLines={5}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <BackButton
                            navigation={navigation}
                        />
                        <TouchableOpacity onPress={() => {
                            // handleSubmit() //akash wrote this
                        }}
                            style={styles.button}
                        >
                            <Text>Add Todo</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </LinearGradient>
        </View>
    )
}

export default NewTodo;