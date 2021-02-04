// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import AdminHomeScreen from '../../components/Screens/AdminHomeScreen';
// import RequestScreen from '../../components/Screens/RequestScreen';

// const Drawer = createDrawerNavigator();

// export default function AdminDrawer(){
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="Home" component={AdminHomeScreen}/>
//             <Drawer.Screen name="User Request" component={RequestScreen}/>
//         </Drawer.Navigator>
//     );
// }
import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AdminStack from '../Stacks/AdminStack';
import RequestScreen from '../../components/Screens/RequestScreen';

const Screens = {
    Home:{
        screen: AdminStack,
    },
    'User Requests':{
        screen:RequestScreen,
    },
};

const adminDrawerNavigator = createDrawerNavigator(Screens,{
    // hideStatusBar:true,
    style:{
        marginTop: StatusBar.currentHeight,
        zIndex:5,
        // backgroundColor:'red',
    },
});
export default createAppContainer(adminDrawerNavigator)
;
