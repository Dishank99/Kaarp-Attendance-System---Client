import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CustomHeader from '../../Layouts/CustomHeader';
import AdminContent from './AdminContent';
import EmployeeContent from './EmployeeContent';

export default function HomeScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Home" type="primary"/>
            <AdminContent/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
});
