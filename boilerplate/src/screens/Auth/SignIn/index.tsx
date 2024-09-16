import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackPropsType } from '../../../navigation/type';
import CPhoneInput from '../../../components/organisms/CPhoneInput';
import CButton from '../../../components/atoms/CButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from 'react-native-segmented-control-2';
import CEmailInput from '../../../components/organisms/CEmailInput';

interface SignInScreenPropsType extends RootStackPropsType<'Auth'> { }

const SignInScreen: React.FC<SignInScreenPropsType> = ({ }) => {
    const [inputType, setInputType] = useState<'phone' | 'email'>('phone'); // New state for input type

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.phoneInputContainer}>
                    <SegmentedControl
                        tabs={['Phone Number', 'Email Address']}
                        onChange={(index: number) => {
                            setInputType(index === 0 ? 'phone' : 'email'); 
                        }}
                    />
                    {inputType === 'phone' ? ( 
                        <CPhoneInput value='' setFormattedValue={() => { }} onChangeText={() => { }} errorMessage='' />
                    ) : (
                        <CEmailInput value='' onChangeText={() => { }} errorMessage='' />
                    )}
                </View>
                <CButton onPress={() => { }} title="Next" />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    phoneInputContainer: {
        flexGrow: 1,
        flex: 0.7,
        justifyContent: 'center',
    }
});

export default SignInScreen;



