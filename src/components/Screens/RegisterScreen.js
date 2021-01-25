import React from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import { Button, Input } from 'react-native-elements';
import DismissKeyboardWrapper from '../Layouts/DismissKeyboardWrapper';

import {Formik} from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
    fname: yup.string()
                .required('First Name is required field'),
    lname: yup.string()
                .required('Last Name is required field'),
    email: yup.string()
                .required('Email ID is required field').email(),
    confirmEmail: yup.string().required('Please Confirm your Email Id')
                .oneOf([yup.ref('email'),null], 'Email Id not matching'), //oneOf checks each char from the mention ref field and eleminates it untill the original ref field is null
    mobileNo: yup.string()
                .matches(phoneRegExp,'In valid Mobile No')
                .max(10, 'Mobile No should be 10 digit')
                .min(10, 'Mobile No should be 10 digit')
                .required('Mobile No is required field'),
    confirmMobileNo: yup.string().required('Please Confirm your Mobile No')
                        .oneOf([yup.ref('mobileNo'), null], 'Mobile No. not matching'),
});

export default function RegisterScreen({navigation}){
    return (
        <DismissKeyboardWrapper>
            <SafeAreaView style={styles.container}>
                <Formik
                    initialValues={{fname: '', lname: '', email: '', confirmEmail:'', mobileNo: '', confirmMobileNo:''}}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions)=>{
                        console.log(values);
                        Alert.alert('Info','clicked');
                    }}
                >
                {(props)=>{
                    return (
                        <React.Fragment>
                            {/* TODO: Datepicker and Gender Option */}
                            <Input
                            placeholder="First Name"
                            value={props.values.fname}
                            onChangeText={props.handleChange('fname')}
                            onBlur={props.handleBlur('fname')}
                            errorMessage = {props.errors.fname}
                            />
                            <Input
                            placeholder="Last Name"
                            value={props.values.lname}
                            onChangeText={props.handleChange('lname')}
                            onBlur={props.handleBlur('lname')}
                            errorMessage = {props.touched.lname && props.errors.lname}
                            />
                            <Input
                            placeholder="Email"
                            value={props.values.email}
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')}
                            errorMessage = {props.touched.email && props.errors.email}
                            />
                            <Input
                            placeholder="Confirm your Email"
                            value={props.values.confirmEmail}
                            onChangeText={props.handleChange('confirmEmail')}
                            onBlur={props.handleBlur('confirmEmail')}
                            errorMessage = {props.touched.confirmEmail && props.errors.confirmEmail}
                            />
                            <Input
                            keyboardType="numeric"
                            placeholder="Mobile No."
                            value={props.values.mobileNo}
                            onChangeText={props.handleChange('mobileNo')}
                            onBlur={props.handleBlur('mobileNo')}
                            errorMessage = {props.touched.mobileNo && props.errors.mobileNo}
                            />
                            <Input
                            keyboardType="numeric"
                            placeholder="Confirm your Mobile No."
                            value={props.values.confirmMobileNo}
                            onChangeText={props.handleChange('confirmMobileNo')}
                            onBlur={props.handleBlur('confirmMobileNo')}
                            errorMessage = {props.touched.confirmMobileNo && props.errors.confirmMobileNo}
                            />
                            <Button
                                title="Register"
                                raised
                                onPressHandler={props.handleSubmit}
                            />
                        </React.Fragment>

                );}}
                </Formik>
            </SafeAreaView>
        </DismissKeyboardWrapper>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
