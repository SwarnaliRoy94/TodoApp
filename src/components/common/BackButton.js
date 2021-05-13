import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { asset } from '../../assets';

const styles = {
    imageStyle: {
        height: 30,
        width: 30
    }
}

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.goBack();
            }}>
            <Image source={asset.Back}
                style={styles.imageStyle}
            />
        </TouchableOpacity>
    )
}

export default BackButton;