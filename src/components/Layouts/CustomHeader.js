import React from 'react';
import { Header } from 'react-native-elements';

export default function CustomHeader({navigation, type, title, onPressHome}){

    const leftConditionalIconCongif = type === 'primary' ?
    { icon: 'menu', color: '#fff', size:30, onPress:()=>navigation.toggleDrawer()}
    : { icon: 'chevron-left', color: '#fff', size:30, onPress:()=>navigation.goBack() };

    const rightConditionalIconCongif = {
        icon: 'home',
        color: '#fff',
        size:30,
        onPress:()=>onPressHome ? onPressHome() : navigation.navigate('Home'),
        // be it in any stack, directly navigate to Home named Screen
    };

    return (
        <Header
            leftComponent={leftConditionalIconCongif}
            centerComponent={
                {text:title, style:{color:'white', fontSize:20}}
            }
            rightComponent={rightConditionalIconCongif}
        />
    );
}
