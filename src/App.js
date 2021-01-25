import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import EmployeeHomeScreen from './components/Screens/EmployeeHomeScreen';
import AdminHomeScreen from './components/Screens/AdminHomeScreen';
import HomeScreen from './components/Screens/HomeScreen';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import MainNavigator from './routes/MainNavigator';
import RequestScreen from './components/Screens/RequestScreen';
import AttendanceRecordScreen from './components/Screens/AttendanceRecordScreen';

import AuthProvider from './context/AuthContext';

export default function App(){
  return (
    <ThemeProvider>
      <AuthProvider>
        <MainNavigator/>
      </AuthProvider>
    </ThemeProvider>
  );
}
