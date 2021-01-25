import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import CustomHeader from '../Layouts/CustomHeader';
import { Card, ListItem } from 'react-native-elements';
import CustomerAvatar from '../Others/CustomAvatar';
import Batch from '../Others/Batch';

const data = [
    { id:1, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:2, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:3, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:4, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:5, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:6, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:7, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:8, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:9, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:10, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:11, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:12, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:13, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:14, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    // { id:15, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
];

function TodaysAttendanceListItem({item, onPressListitem}){
    return (
        <ListItem bottomDivider onPress={()=>onPressListitem()}>
            <CustomerAvatar title={item.avatarTitle} size="small"/>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
                <ListItem.Subtitle numberOfLines={1} >{item.presentAt}</ListItem.Subtitle>
                <Batch type="present" />
            </ListItem.Content>
            <ListItem.Chevron size={26} />
        </ListItem>
    );
}



export default function AdminHomeScreen({navigation}){

    const navigateToAttendanceRecordScreen = () => navigation.navigate('Attendance Record');

    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Home" type="primary" navigation={navigation}/>
            <View style={styles.mainContent} >
                <Card containerStyle={styles.topListContent}>
                    <Card.Title>Today's Attendance</Card.Title>
                    <Card.Divider/>
                    <View style={{marginBottom:100}} >
                    <FlatList
                        data={data}
                        keyExtractor={item=>item.id.toString()}
                        renderItem={({item})=><TodaysAttendanceListItem
                                                item={item}
                                                onPressListitem={navigateToAttendanceRecordScreen}
                                            />}
                    />
                    </View>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    mainContent:{
        flex:1,
        padding:15,
    },
    topListContent:{
        // borderWidth:1,
        flex:1,
        margin:0,
        // marginVertical:20,
        // marginHorizontal:30,
    },
});
