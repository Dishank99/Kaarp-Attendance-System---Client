// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import AdminHomeScreen from '../../components/Screens/AdminHomeScreen';
// import AttendanceRecordScreen from '../../components/Screens/AttendanceRecordScreen';

// const Stack = createStackNavigator();

// const commonScreenOptions = {
//     headerShown:false,
// };


// export default function AdminStack(){
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={AdminHomeScreen} options={commonScreenOptions} />
//             <Stack.Screen name="Attendance Record" component={AttendanceRecordScreen} options={commonScreenOptions}/>
//         </Stack.Navigator>
//     );
// }
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AdminHomeScreen from '../../components/Screens/AdminHomeScreen';
import AttendanceRecordScreen from '../../components/Screens/AttendanceRecordScreen';

const Screens = {
    Home:{
        screen: AdminHomeScreen,
    },
    'Attendance Record':{
        screen: AttendanceRecordScreen,
    },
};

const options = {
    defaultNavigationOptions:{
        headerShown: false,
    },
};

const adminStackNavigator = createStackNavigator(Screens,options);
export default createAppContainer(adminStackNavigator)
;
