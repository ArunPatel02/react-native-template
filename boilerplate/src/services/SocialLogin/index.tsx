import { GoogleSignin } from '@react-native-google-signin/google-signin';
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

GoogleSignin.configure({
    webClientId:
        '214366019950-kdskhbvic0h5d2mvpunu368bs77tbond.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
});

export const hasPreviousSignIn = async () => {
    const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();
    // console.log("hasPreviousSignIn" , hasPreviousSignIn);
    if (hasPreviousSignIn) {
        const user = GoogleSignin.getCurrentUser();
        console.log('this is current user --- ', user);
    }
};

export const googleSignIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        if (response) {
            const data = response.data;
            console.log('response google signin successful', data);
        } else {
            // sign in was cancelled by user
        }
    } catch (error) {
        console.log('error google signing in', error);
    }
};
