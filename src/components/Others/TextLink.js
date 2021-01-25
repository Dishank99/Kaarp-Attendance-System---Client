import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextLink({children, onPressHandler}){
    return (
        <Text onPress={onPressHandler} style={styles.link}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    link:{
        fontSize:14,
        alignSelf:'center',
        textDecorationLine:'underline',
        color:'blue',
        marginVertical:5,
    },
})
;
