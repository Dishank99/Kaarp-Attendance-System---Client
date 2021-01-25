import React from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';

export default function DismissKeyboardWrapper({children}){

    const pressHandler = () => Keyboard.dismiss();

    return (
        <TouchableWithoutFeedback style={styles.default} onPress={pressHandler}>
            {children}
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    default:{
        flex:1,
    },
});
