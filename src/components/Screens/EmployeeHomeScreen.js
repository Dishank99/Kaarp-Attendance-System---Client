import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../Layouts/CustomHeader';
import { Button } from 'react-native-elements';
import { getTodaysDateTime } from '../../shared/utils';

export default function EmployeeHomeScreen({navigation}){

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const [ todaysDateTime, setTodaysDateTime ] = useState();

    useEffect(()=>{
        setTodaysDateTime(getTodaysDateTime());
    },[]);

    const onPressHomeHandler = () => setIsButtonDisabled(false);

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Home" type="primary" navigation={navigation} onPressHome = {onPressHomeHandler}/>
            <View style={styles.content}>
            {todaysDateTime && <View style={styles.promptContent}>
                <Text style={styles.normalText}>Your Attendance for</Text>
                <Text style={[styles.normalText, styles.boldText]}>{todaysDateTime.date}</Text>
                <Text style={styles.normalText}>will be marked on</Text>
                <Text style={[styles.normalText, styles.boldText]}>{todaysDateTime.time}</Text>
            </View>}
            <Button
                title="Mark Attendance"
                raised
                disabled={isButtonDisabled}
                onPress={()=>setIsButtonDisabled(true)}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    normalText:{
        fontSize:18,
        textAlign:'center',
    },
    boldText:{
        fontWeight:'bold',
    },
    promptContent:{
        marginBottom:10,
    },
});
