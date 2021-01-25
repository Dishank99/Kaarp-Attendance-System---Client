import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import CustomHeader from '../Layouts/CustomHeader';
import CustomAvatar from '../Others/CustomAvatar';
import { Check, Cross } from '../Others/IconButton';

const data = [
    {id:1, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcdfksnldksf@gmail.com'},
    {id:2, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    {id:3, dateTimeOfArrival:'21 Sept, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    {id:4, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    {id:5, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    {id:6, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    {id:7, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:8, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:9, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:10, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:11, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:12, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:13, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:14, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
    // {id:15, dateTimeOfArrival:'21 Jan, 2021 09:30 AM' , avatarTitle:'AE', name:'abcd efg', mobileNo:'9876543201', emailId:'abcd@gmail.com'},
];

const CustomerRenderListItem = ({item}) => (
    <ListItem bottomDivider containerStyle={styles.listItemContainer}>
        <CustomAvatar title={item.avatarTitle} size="medium" />
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.mobileNo}</ListItem.Subtitle>
            <ListItem.Subtitle numberOfLines={1}>{item.emailId}</ListItem.Subtitle>
            <ListItem.Subtitle numberOfLines={1}>{item.dateTimeOfArrival}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={styles.listItemButtonContainer}>
            <Check/>
            <Cross/>
        </View>
        <ListItem.Chevron size={30} />
    </ListItem>
);

export default function RequestScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <CustomHeader title="Requests" type="primary" navigation={navigation}/>
            <View style={styles.content}>
                <FlatList
                    initialNumToRender={0}
                    data={data}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={CustomerRenderListItem}
                />
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
        paddingVertical:5,
    },
    listItemContainer:{
        elevation:3,
        margin:7,
        borderRadius:10,
    },
    listItemButtonContainer:{
        // borderWidth:1,
        // flexDirection:'row',
        // width:'25%',
        justifyContent:'space-evenly',
    },
});
