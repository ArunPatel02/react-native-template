import React from 'react';
import { TouchableOpacity } from 'react-native';
import FacebookIcon from '../../../assets/SignIn/icons/facebook.svg';
import { Platform } from 'react-native';
import { LoginManager, Profile } from 'react-native-fbsdk-next';

const getProfile = () => {
    Profile.getCurrentProfile().then(function (currentProfile) {
        if (currentProfile) {
            console.log(
                'The current logged user is: ' +
                JSON.stringify(currentProfile) +
                '. His profile id is: ' +
                currentProfile.userID,
            );
        }
    });
}

export const facebookSignIn = () => {
    if (Platform.OS === 'ios') {
        LoginManager.logInWithPermissions(['public_profile', 'email'] , 'limited').then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    if (result) {
                        console.log(
                            'Login success with permissions: ' +
                            result?.grantedPermissions?.toString(),
                        );
                        getProfile()
                    }
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            },
        );
    } else {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    if (result) {
                        console.log(
                            'Login success with permissions: ' +
                            result?.grantedPermissions?.toString(),
                        );
                        getProfile()
                    }
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            },
        );
    }
};

const FacebookSignIn: React.FC = () => {
    return (
        <TouchableOpacity onPress={()=>facebookSignIn()}><FacebookIcon width={40} height={40} /></TouchableOpacity>
    );
};

export default FacebookSignIn;
