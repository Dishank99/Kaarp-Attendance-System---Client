// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from '../../components/Screens/LoginScreen';
// import RegisterScreen from '../../components/Screens/RegisterScreen';

// const Stack = createStackNavigator();

// const commonScreenOptions = {
//     headerShown:false,
// };

// export default function AuthStack(){
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Login" component={LoginScreen} options={commonScreenOptions}/>
//             <Stack.Screen name="Register" component={RegisterScreen} options={commonScreenOptions}/>
//         </Stack.Navigator>
//     );
// }
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
import LoginScreen from '../../components/Screens/LoginScreen';
import RegisterScreen from '../../components/Screens/RegisterScreen';

const Screens = {
    Login:{
        screen: LoginScreen,
    },
    Register:{
        screen: RegisterScreen,
    },
};

const options = {
    defaultNavigationOptions:{
        headerShown: false,
    },
};

const authStackNavigator = createStackNavigator(Screens,options);
export default createAppContainer(authStackNavigator)
;
