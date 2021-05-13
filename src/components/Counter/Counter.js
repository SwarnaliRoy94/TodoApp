import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../common/Header';

const styles = {
    viewStyle: {
        justifyContent: 'center',
        flex: 1
    },
    container: {
        backgroundColor: 'blue',
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textStyle: {
        fontSize: 20,
        color: 'white'
    },
    buttonStyle: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'grey'
    }
}

const Counter = () => {

    const [number, setNumber] = useState(0);

    const decrement = () => {
        setNumber(number - 1)
    }

    const increment = () => {
        setNumber(number + 1)
    }
    
    return (
        <View style={{
            height: '100%', width: '100%'
        }}
        >
            < Header title="Counter" />
            <View style={styles.viewStyle}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            decrement();
                        }}
                        disabled={number <= 0 ? true : false}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.textStyle}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.textStyle}>{number}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            increment();
                        }}
                        style={styles.buttonStyle}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Counter;