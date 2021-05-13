import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Header from '../Header';

const styles = {

    viewStyle: {
        backgroundColor: '#E0D8FE',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    wrapper: {
        backgroundColor: '#9A83F7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25
    },
    textStyle: {
        fontSize: 25,
        color: 'blue'
    },
    button: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#D0CAE7'
    }
}

const Counter1 = () => {

    const [number, setNumber] = useState(0);

    const decrease = () => {
        setNumber(number - 1);
    }

    const increase = () => {
        setNumber(number + 1);
    }

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <Header title='Counter1' />
            <View style={styles.viewStyle}>
                <View style={styles.wrapper}>
                    <TouchableOpacity onPress={() => {
                        decrease();
                    }}
                        disabled={number <= 0 ? true : false}
                        style={styles.button}
                    >
                        <Text style={styles.textStyle}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.textStyle}>{number}</Text>

                    <TouchableOpacity onPress={() => {
                        increase();
                    }}
                        style={styles.button}
                    >
                        <Text style={styles.textStyle}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Counter1;
