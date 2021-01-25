import React from 'react';
import { ListItem } from 'react-native-elements';
import CustomerAvatar from './CustomAvatar';

export default function CustomListItem({item}){
    return (
        <ListItem bottomDivider>
            <CustomerAvatar title={item.avatarTitle} size="small"/>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.time}</ListItem.Subtitle>
                <ListItem.Subtitle numberOfLines={1} >{item.presentAt}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={26} />
        </ListItem>
    );
}

