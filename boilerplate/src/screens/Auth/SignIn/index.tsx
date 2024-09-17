import React, { useState, useCallback } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { CompositeAuthScreenProps } from '../../../navigation/type';
import CPhoneInput from '../../../components/molecules/CPhoneInput';
import CButton from '../../../components/atoms/CButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from 'react-native-segmented-control-2';
import { moderateScale } from 'react-native-size-matters';
import CInputWithLabel from '../../../components/molecules/CInputWithLabel';
import DoNotHaveAccount from '../../../components/atoms/DoNotHaveAccount';
import AllreadyHaveAccount from '../../../components/atoms/AllreadyHaveAccount';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';
import ForgetPassword from '../../../components/atoms/ForgetPassword';

// Custom validation function
const validatePhoneNumber = (phoneNumber: string, countryCode: CountryCode) => {
    const phoneNumberObject = parsePhoneNumberFromString(phoneNumber, countryCode);
    return phoneNumberObject ? phoneNumberObject.isValid() : false;
};

// Create a Yup schema function based on country code
const createPhoneNumberSchema = (countryCode: CountryCode) => {
    return Yup.object().shape({
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .test('is-valid-phone-number', 'Invalid phone number', value => validatePhoneNumber(value, countryCode)),
    });
};

// Validation schemas
const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
});

const signupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
});

interface SignInScreenPropsType extends CompositeAuthScreenProps<'Signin'> { }

const SignInScreen: React.FC<SignInScreenPropsType> = ({ navigation }) => {
    const [inputType, setInputType] = useState<'phone' | 'email'>('phone');
    const [emailFormType, setemailFormType] = useState<'login' | 'signup'>(
        'signup',
    );
    const [CountryCodeString, setCountryCodeString] = useState<CountryCode>('IN')

    const getInitialValues = useCallback(() => {
        // Wrap in useCallback
        if (inputType === 'phone') {
            return {
                phoneNumber: '',
            };
        }
        if (inputType === 'email' && emailFormType === 'login') {
            return {
                email: '',
                password: '',
            };
        }
        return {
            name: '',
            email: '',
            password: '',
        };
    }, [inputType, emailFormType]); // Add dependencies

    const Form = useCallback(
        () => (
            <Formik
                initialValues={getInitialValues()}
                validationSchema={
                    inputType === 'email'
                        ? emailFormType === 'signup'
                            ? signupSchema
                            : loginSchema
                        : createPhoneNumberSchema(CountryCodeString)
                }
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate('Verification');

                }}>
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <View style={styles.phoneInputContainer}>
                            {inputType === 'phone' ? (
                                <CPhoneInput
                                    value={values.phoneNumber || ''}
                                    containerStyle={{ width: "100%" }}
                                    onChangeText={() => { }}
                                    errorMessage={errors.phoneNumber || ''}
                                    onChangeFormattedText={handleChange('phoneNumber')}
                                    //@ts-ignore
                                    defaultCode={CountryCodeString}
                                    onChangeCountry={(country) => setCountryCodeString(country.cca2 as CountryCode)}
                                />
                            ) : (
                                <>
                                    {emailFormType === 'signup' && (
                                        <CInputWithLabel
                                            label="Name"
                                            value={values.name || ''}
                                            onChangeText={handleChange('name')}
                                            errorMessage={errors.name || ''}
                                            returnKeyType='next'
                                            placeholder="Name"
                                            enablesReturnKeyAutomatically
                                            autoFocus
                                        />
                                    )}

                                    <CInputWithLabel
                                        label="Email"
                                        value={values.email || ''}
                                        onChangeText={handleChange('email')}
                                        errorMessage={errors.email || ''}
                                        keyboardType="email-address"
                                        returnKeyType='next'
                                        placeholder="email@example,com"
                                        autoFocus={emailFormType === 'login'}
                                        enablesReturnKeyAutomatically
                                    />

                                    <CInputWithLabel
                                        label="Password"
                                        value={values.password || ''}
                                        onChangeText={handleChange('password')}
                                        errorMessage={errors.password || ''}
                                        placeholder="Password"
                                        returnKeyType='done'
                                        enablesReturnKeyAutomatically
                                        secureTextEntry
                                    />
                                    {emailFormType === 'login' ? (
                                        <>
                                        <ForgetPassword onPress={()=>{}} />
                                        <DoNotHaveAccount
                                            onPress={() => setemailFormType('signup')}
                                        />
                                        </>
                                    ) : (
                                        <AllreadyHaveAccount
                                            onPress={() => setemailFormType('login')}
                                        />
                                    )}
                                </>
                            )}
                        </View>
                        <CButton
                            onPress={handleSubmit}
                            title={
                                inputType === 'email' && emailFormType === 'login'
                                    ? 'Login'
                                    : 'Next'
                            }
                        />
                    </>
                )}
            </Formik>
        ),
        [inputType, emailFormType, getInitialValues, CountryCodeString , navigation],
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                        <SegmentedControl
                                tabs={['Phone Number', 'Email Address']}
                                value={inputType === 'phone' ? 0 : 1}
                                onChange={(index: number) => {
                                    setInputType(index === 0 ? 'phone' : 'email');
                                }}
                            />
                    <Form />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width : '100%',
    },
    phoneInputContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        gap: moderateScale(10),
    },
});

export default SignInScreen;
