import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Stacks/AuthStack';
import EmployeeDrawer from './Drawers/EmployeeDrawer';
import AdminDrawer from './Drawers/AdminDrawer';
import { useAuth } from '../context/AuthContext';
import { Alert } from 'react-native';

export default function MainNavigator(){

    const {currentUser} = useAuth();

    if (currentUser){
        if (currentUser.type === 'Admin')
            {return <AdminDrawer/>;}
        else if (currentUser.type === 'Employee')
            {return <EmployeeDrawer/>;}
        else
            {
                Alert.alert('Info','Could not Log you in. Please try again.');
                return <AuthStack/>;
            }
    }
    else {
        return <AuthStack/>;
    }
}
