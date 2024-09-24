import { moderateScale } from "react-native-size-matters";


const fonts: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900'
} = {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
}

const fontSize = {
    xs: moderateScale(8),
    s: moderateScale(12),
    m: moderateScale(16),
    l: moderateScale(20),
    xl: moderateScale(24),
    xxl: moderateScale(28),
};

export interface ThemeInterface {
    dark: boolean;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        error: string;
        text: string;
        onPrimary: string;
        onSecondary: string;
        onBackground: string;
        onSurface: string;
        onError: string;
        card: string;
        placeholderTextColor : string
    };
    fonts: typeof fonts;
    fontSize: typeof fontSize;
}

export const themes: { light: ThemeInterface, dark: ThemeInterface } = {
    light: {
        dark: false,
        colors: {
            primary: '#6200ee',
            secondary: '#03dac6',
            background: '#ffffff',
            surface: '#ffffff',
            error: '#b00020',
            text: '#000000',
            onPrimary: '#ffffff',
            onSecondary: '#000000',
            onBackground: '#000000',
            onSurface: '#000000',
            onError: '#ffffff',
            card : '#ffffff',
            placeholderTextColor: '#a1a1a1', // Light mode placeholder text color
        },
        fonts: fonts,
        fontSize: fontSize,
    },
    dark: {
        dark: true,
        colors: {
            primary: '#bb86fc',
            secondary: '#03dac6',
            background: '#121212',
            surface: '#1e1e1e',
            error: '#cf6679',
            text: '#ffffff',
            onPrimary: '#000000',
            onSecondary: '#000000',
            onBackground: '#ffffff',
            onSurface: '#ffffff',
            onError: '#000000',
            card: '#000000',
            placeholderTextColor: '#e0e0e0' // Light white color for placeholder
        },
        fonts: fonts,
        fontSize: fontSize,
    },
};



export default themes;


