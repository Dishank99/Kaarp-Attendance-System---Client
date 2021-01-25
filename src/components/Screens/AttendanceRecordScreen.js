import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Map from '../Others/Map';
import CustomHeader from '../Layouts/CustomHeader';
import Batch from '../Others/Batch';

export default function AttendanceRecordScreen({navigation}) {

    const tableData = [
        {prompt: 'Date', value:'Mon 21 Jan, 2021'},
        {prompt: 'Time', value:'09:30 PM'},
        {prompt: 'Address', value:'Nehru Road, Dombivli Rast, Thane, Maharashtra.'},
    ];

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Attendance Record" navigation={navigation}/>
            <View style={styles.content} >
                <Map
                    coords={{latitude:19.2094, longitude:73.0939}}
                    addressString="Nehru Road, Dombivli Rast, Thane, Maharashtra."
                    nameOfEmployee="Abcd efg"
                />
                <Card containerStyle={styles.cardContaier}>
                    <Card.FeaturedTitle style={{textAlign:'center',color:'black'}}>
                        Attendance Details
                    </Card.FeaturedTitle>
                    <Card.Divider/>
                    <View style={styles.cardContent}>
                        {tableData.map((eachRow,index)=>(
                            <React.Fragment key={index}>
                                <Text style={{textAlign:'center', marginBottom:5}}>{eachRow.prompt}: {eachRow.value}</Text>
                                <Card.Divider/>
                            </React.Fragment>
                        ))}
                    </View>
                    <View style={{flexDirection:'row', flex:1, justifyContent:'space-evenly'}} >
                        <Batch type="present" />
                    </View>
                </Card>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flex:1,
        // padding:10,
    },
    cardContaier:{
        position:'absolute',
        bottom:10,
        // zIndex:5,
        borderRadius:10,
    },
    cardContent:{
        flex:1,
    },
});
