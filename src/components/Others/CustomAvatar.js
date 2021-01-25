import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function CustomerAvatar(props){
    return (
        <Avatar
            rounded
            activeOpacity={0.7}
            containerStyle={styles.containerStyle}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor:'darkgrey',
        alignSelf:'center',
    },
});
