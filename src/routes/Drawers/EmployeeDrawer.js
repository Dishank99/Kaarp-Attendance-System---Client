// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import EmployeeHomeScreen from '../../components/Screens/EmployeeHomeScreen';

// const Drawer = createDrawerNavigator();

// export default function EmployeeDrawer(){
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="Home" component={EmployeeHomeScreen}/>
//         </Drawer.Navigator>
//     );
// }
import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import EmployeeHomeScreen from '../../components/Screens/EmployeeHomeScreen';
import RequestScreen from '../../components/Screens/RequestScreen';

const Screens = {
    Home:{
        screen:EmployeeHomeScreen,
    },
};

const employeeDrawerNavigator = createDrawerNavigator(Screens,{
    // hideStatusBar:true,
    style:{
        marginTop: StatusBar.currentHeight,
        zIndex:5,
        // backgroundColor:'red',
    },
});
export default createAppContainer(employeeDrawerNavigator)
;
