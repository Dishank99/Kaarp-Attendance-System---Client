import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const typeToStyle = {
    present:{
        color: 'green',
        title:'Present',
    },
    absent:{
        color:'red',
        title:'Absent',
    },
};

export default function Batch({type}){
    return (
        <View style={{...styles.container, backgroundColor:typeToStyle[type].color}}>
            <Text style={styles.title}>{typeToStyle[type].title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:7,
        paddingVertical:2,
        elevation:4,
        marginTop:5,
        borderRadius:5,
        height:27,
    },
    title:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
})
;
