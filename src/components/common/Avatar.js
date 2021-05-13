import React from 'react';
import { Image, View } from 'react-native';

const dimension = 80;
const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '20%',
        alignItems: 'center'

    },
    avatarStyle: {
        height: dimension,
        width: dimension,
        borderRadius: dimension / 2
    }
}

const Avatar = ({ icon }) => {
    return (
        <View style={styles.container}>
            <Image
                source={icon}
                style={styles.avatarStyle}
            />
        </View>
    )
}

export default Avatar;
