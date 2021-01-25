import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import CustomListItem from '../../Others/CustomListItem';

const data = [
    { id:1, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:2, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:3, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:4, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:5, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:6, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:7, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:8, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:9, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:10, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:11, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:12, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:13, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:14, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
    { id:15, name:'abcd efg', time:'04:30 PM', presentAt: 'Nehru road, Dombivli East, Maharashtra', avatarTitle:'AE' },
];

export default function AdminContent(){
    return (
        <View style={styles.mainContent} >
            <Card containerStyle={styles.topListContent}>
                <Card.Title>Today's Attendance</Card.Title>
                <Card.Divider/>
                <View style={{marginBottom:100}} >
                <FlatList
                    data={data}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={CustomListItem}
                />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
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
})
;
