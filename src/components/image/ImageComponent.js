import React from 'react';
import { Text, View, Image } from 'react-native';
import Header from '../common/Header';

const styles = {
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'pink',
        alignItems: 'center'
    },
    imageStyle: {
        height: 300,
        width: 300,
        marginTop: 10
    }
}
const ImageComponent = () => {
    return (
        <View>
            <Header title='Image' />
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>
        </View>
    )
}

export default ImageComponent;