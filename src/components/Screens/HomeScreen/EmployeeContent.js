import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { getTodaysDateTime } from '../../../shared/utils';

export default function EmployeeContent(){

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const todaysDateTime = getTodaysDateTime();

    return (
        <View style={styles.content}>
            <View style={styles.promptContent}>
                <Text style={styles.normalText}>Your Attendance for</Text>
                <Text style={[styles.normalText, styles.boldText]}>{todaysDateTime.date}</Text>
                <Text style={styles.normalText}>will be marked on</Text>
                <Text style={[styles.normalText, styles.boldText]}>{todaysDateTime.time}</Text>
            </View>
            <Button
                title="Mark Attendance"
                raised
                disabled={isButtonDisabled}
                onPress={()=>setIsButtonDisabled(true)}
            />
            <Text onPress={()=>setIsButtonDisabled(false)}>Refresh</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
})
;
