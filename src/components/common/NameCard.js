import React from 'react';
import { View, Text } from 'react-native';

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%'
    }
}

const NameCard = ({ name = 'Hridi', noOfTask = '3' }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25 }}> Hello, {name} </Text>

            <Text
                style={{ fontSize: 20 }}
            >
                You have <Text style={{ color: 'blue' }}>{noOfTask} new tasks</Text> today!!
            </Text>
        </View>
    )
}

export default NameCard;