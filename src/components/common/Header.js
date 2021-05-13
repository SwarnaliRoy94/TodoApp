import React from 'react';
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { asset } from '../../assets';

const styles = {
    headerStyle: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500'
    },
    imageStyle: {
        width: 20,
        height: 20
    }
}

const Header = ({ title }) => {
    // const { title } = props;
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#d9a7c7', '#fffcdc', '#d9a7c7']}
            style={styles.headerStyle}
        >
            <TouchableOpacity
                onPress={() => {
                    console.log('button pressed');
                }}
            >
                <Image source={asset.Menu}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>

            <Text style={styles.textStyle}> {title} </Text>

            <TouchableOpacity
                onPress={() => {
                    console.log('button pressed');
                }}
            >
                <Image source={asset.Add}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Header;