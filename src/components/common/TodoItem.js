import React, { useState, useEffect } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'
import { GetTodos, UpdateTodos } from '../../config';

const styles = {
    container: {
        backgroundColor: '#79CBCA',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 25
    },
    leftWrapper: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomSpace: {
        marginBottom: 5,
        width: 150
    },
    textStyle: {
        fontSize: 20
    },
    button: {
        justifyContent: 'center',
        paddingHorizontal: 8,
        elevation: 1,
        backgroundColor: '#d9a7c7',
        borderRadius: 16
    }
}

const TodoItems = ({ id, title, subtitle, completed, navigation }) => {
    const [isSelected, setSelection] = useState(completed || false);
    const colorsArr = [['#E7D7FC', '#F2EAFD', '#E7D7FC'], ['#F3CCDC', '#FBE7FE', '#F3CCDC']]

    const truncate = (str, length = 16) => {
        return str.slice(0, length) + '...'
    }

    const updateCompleted = (val) => {
        setSelection(val);
        // ` string interpolation , ${} variable 
        const payLoad = {
            title: title,
            completed: isSelected
        }
        UpdateTodos(id, payLoad)
            .then(() => {
                GetTodos();
            })
            .catch((e) => {
                console.log(e.response)
            })
    }
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={colorsArr[id % 2]}
            style={styles.container}
        >
            <View style={styles.leftWrapper}>
                <CheckBox
                    disabled={false}
                    value={isSelected}
                    onValueChange={(text) => {
                        updateCompleted(text);
                    }}
                    tintColors={{ true: 'red', false: 'black' }}
                    style={{ marginLeft: 0 }}
                />
                <View style={{ marginLeft: 10 }}>
                    <View style={styles.bottomSpace}>
                        <Text style={styles.textStyle}>{truncate(title, 10)}</Text>
                    </View>
                    <Text style={styles.textStyle}>{subtitle}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    navigation.navigate('TodoDetails', {
                        id: id,
                        title: title,
                        description: subtitle
                    })
                }}>
                <Text style={styles.textStyle}>Details</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default TodoItems;