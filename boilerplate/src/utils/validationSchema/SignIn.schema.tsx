import * as Yup from 'yup';
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';

// Custom validation function
const validatePhoneNumber = (phoneNumber: string, countryCode: CountryCode) => {
    const phoneNumberObject = parsePhoneNumberFromString(phoneNumber, countryCode);
    return phoneNumberObject ? phoneNumberObject.isValid() : false;
};

// Create a Yup schema function based on country code
export const createPhoneNumberSchema = (countryCode: CountryCode) => {
    return Yup.object().shape({
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .test('is-valid-phone-number', 'Invalid phone number', value => validatePhoneNumber(value, countryCode)),
    });
};

// Validation schemas
export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
});

export const signupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password too short').required('Required'),
});