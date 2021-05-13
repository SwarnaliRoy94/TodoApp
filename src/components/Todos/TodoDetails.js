import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../common/Header';
import { asset } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../common/BackButton';

const styles = {
    container: {
        // height: '100%',
        // width: '100%',
        justifyContent: 'space-between',
        flex: 1
    },
    topWrapper: {
        margin: 10
    },
    textStyle: {
        fontSize: 20
    },
    buttonWrapper: {
        flexDirection: 'row',
        margin: 30,
        justifyContent: 'space-between'
    },
    button: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#d9a7c7',
        justifyContent: 'center'
    }
}

const TodoDetails = ({ navigation, route }) => {
    console.log(route.params);

    const { title, description } = route.params;

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Header title='Todo Details' />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#fffcdc', '#DAE2F8', '#fffcdc']}
                style={styles.container}
            >
                <View style={styles.topWrapper}>
                    <Text style={styles.textStyle}>Title: {title}</Text>
                    <Text style={styles.textStyle}>Description: {description}</Text>
                </View>

                <View style={styles.buttonWrapper}>

                    <BackButton
                        navigation={navigation}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log('button pressed')
                        }}>
                        <Text style={styles.textStyle}>Edit</Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </SafeAreaView >
    )
}

export default TodoDetails;