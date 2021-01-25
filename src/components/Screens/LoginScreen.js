import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { Button, Input } from 'react-native-elements';
import DismissKeyboardWrapper from '../Layouts/DismissKeyboardWrapper';

import {Formik} from 'formik';
import * as yup from 'yup';
import TextLink from '../Others/TextLink';

import { useAuth } from '../../context/AuthContext';

const validationSchema = yup.object({
    logInCredential: yup.string()
                        // .min(10,'Invalid Email or Mobile No.')
                        .required('Email or Mobile No. is required'),
});

export default function LoginScreen({navigation}){

    const {setCurrentUser} = useAuth();

    return (
        <DismissKeyboardWrapper>
            <SafeAreaView style={styles.container}>
                <Formik
                    initialValues={{logInCredential: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions)=>{
                        console.log(values);
                        // navigation.navigate('Register');
                        setCurrentUser({...values.logInCredential, type:'Admin'});
                    }}
                >
                {(props)=>{
                    return (
                        <React.Fragment>
                            <Input
                            placeholder="Email Id or Mobile No."
                            value={props.values.logInCredential}
                            onChangeText={props.handleChange('logInCredential')}
                            onBlur={props.handleBlur('logInCredential')}
                            errorMessage = {props.touched.logInCredential && props.errors.logInCredential}
                            />
                            <Button
                                title="Login"
                                raised
                                onPress={props.handleSubmit}
                            />
                            <TextLink
                                onPressHandler={()=>navigation.navigate('Register')}
                            >Register Yourself</TextLink>
                        </React.Fragment>

                );}}
                </Formik>
            </SafeAreaView>
        </DismissKeyboardWrapper>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
