import React, { useContext, useRef, useState } from 'react';
import { View, Text, Image, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext, useTheme } from '../../../theme/ThemeProvider';
import ImagePicker from 'react-native-image-crop-picker';
import { CompositeBottomTabNavigationScreenProps } from '../../../navigation/type';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import CInputWithLabel from '../../../components/molecules/CInputWithLabel';
import CButton from '../../../components/atoms/CButton';


// Define the props for the SettingsScreen component
interface SettingsScreenProps extends CompositeBottomTabNavigationScreenProps<'Setting'> { }


const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
    const [profilePic, setProfilePic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s'); // Placeholder for profile picture URL

    const Theme = useTheme()

    const { toggleTheme, theme } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: Theme.colors.background
        },
        text: {
            fontSize: Theme.fontSize.s,
            color: Theme.colors.text
        },
        settingItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            marginBottom: 20,
        },
        profilePic: {
            width: 80,
            height: 80,
            borderRadius: 50,
            marginVertical: 10,
        },
        openSheetContent: {
            paddingHorizontal: 20,
            paddingVertical: 40,
            gap: 20
        }
    });

    const actionSheetRef = useRef<ActionSheetRef>(null);

    const ChangePasswordActionSheetRef = useRef<ActionSheetRef>(null);

    const handleProfileChange = () => {
        actionSheetRef.current?.show();
    }

    const openCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            maxFiles : 1,
            mediaType : 'photo',
            cropperCircleOverlay : true,
          }).then(image => {
            console.log(image);
            setProfilePic(image.path)
            actionSheetRef.current?.hide();
          });
    }

    const openGallery = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            maxFiles : 1,
            mediaType : 'photo',
            cropperCircleOverlay : true,
          }).then(image => {
            console.log(image);
            setProfilePic(image.path)
            actionSheetRef.current?.hide();
          });
    }


    const handleLogout = () => {
        // Implement logout functionality
        console.log('User logged out');
        navigation.navigate('Auth', { screen: 'Signin' })
    };

    const handleDeleteAccount = () => {
        // Implement account deletion functionality
        console.log('Account deleted');
    };

    const handleChangePassword = () => {
        // Implement password change functionality
        console.log('Password changed');
        ChangePasswordActionSheetRef.current?.show();
    };

    return (
        <View style={[styles.container]}>
            <ActionSheet ref={actionSheetRef} containerStyle={{backgroundColor : Theme.colors.background}} >
                <View style={styles.openSheetContent}>
                    <TouchableOpacity onPress={openCamera}><Text style={styles.text}>Open Camera</Text></TouchableOpacity>
                    <TouchableOpacity onPress={openGallery}><Text style={styles.text}>Open Gallery</Text></TouchableOpacity>
                </View>
            </ActionSheet>
            <ActionSheet ref={ChangePasswordActionSheetRef} containerStyle={{backgroundColor : Theme.colors.background}} >
                <View style={styles.openSheetContent}>
                    <CInputWithLabel label='Old Password' value=''  />
                    <CInputWithLabel label='New Password' value=''  />
                    <CButton title='Chnage Password' onPress={()=>ChangePasswordActionSheetRef.current?.hide()} />
                </View>
            </ActionSheet>
            <View style={styles.settingItem}>
                <TouchableOpacity onPress={handleProfileChange}>
                    <Image source={{ uri: profilePic }} style={styles.profilePic} />
                </TouchableOpacity>
                <View style={{ flexGrow: 1 }}>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>Arun Patel</Text>
                </View>
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.text}>Toggle Dark Theme</Text>
                <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
            </View>
            <View style={styles.settingItem}>
                <TouchableOpacity onPress={handleChangePassword}><Text style={styles.text}>Change Password</Text></TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
                <TouchableOpacity onPress={handleLogout}><Text style={styles.text}>Logout</Text></TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
                <TouchableOpacity onPress={handleDeleteAccount}><Text style={styles.text}>Delete Account</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsScreen;
