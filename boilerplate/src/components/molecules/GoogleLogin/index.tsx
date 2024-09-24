import React from 'react';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

//config google signin with client id from google cloud console and pass scopes as needed
GoogleSignin.configure({
    webClientId:
        '214366019950-kdskhbvic0h5d2mvpunu368bs77tbond.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
});

//function to check if user previously signin
export const hasPreviousSignIn = async () => {
    const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();
    // console.log("hasPreviousSignIn" , hasPreviousSignIn);
    if (hasPreviousSignIn) {
        const user = GoogleSignin.getCurrentUser();
        console.log('this is current user --- ', user);
    }
};

//function to signin to google
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

//function to use to googleLogout
export const googleLogOut = async()=>{
    try {
        await GoogleSignin.signOut()
    } catch (error) {
        console.log('--- error signing our from google ', error , '--------------------------------')
    }
};


//custom google signin button
const GoogleLoginButton: React.FC = () => {
    return (
        <GoogleSigninButton size={GoogleSigninButton.Size.Icon} onPress={()=>googleSignIn()} />
    );
};

export default GoogleLoginButton;
