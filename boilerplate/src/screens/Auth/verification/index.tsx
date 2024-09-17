import {
  View,
  Keyboard,
  StyleSheet,
  InteractionManager,
  Platform,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  getHash,
  startOtpListener,
  removeListener,
} from 'react-native-otp-verify';
import { SafeAreaView } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';
import CButton from '../../../components/atoms/CButton';
import { CompositeAuthScreenProps } from '../../../navigation/type';
import { OtpInput } from '../../../components/atoms/CInput';

interface VerificationScreenPropsType extends CompositeAuthScreenProps<'Verification'> { }

const VerificationScreen: React.FC<VerificationScreenPropsType> = ({
  navigation,
}) => {
  const [code1, setCode1] = React.useState('');
  const [code2, setCode2] = React.useState('');
  const [code3, setCode3] = React.useState('');
  const [code4, setCode4] = React.useState('');
  const [code5, setCode5] = React.useState('');
  const [code6, setCode6] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [timer, setTimer] = React.useState(40);
  // const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const [firstInputTime, setFirstInputTime] = React.useState<Date | null>(null); // Update state type

  const inputRef1 = React.useRef<TextInput>(null);
  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);
  const inputRef4 = React.useRef<TextInput>(null);
  const inputRef5 = React.useRef<TextInput>(null);
  const inputRef6 = React.useRef<TextInput>(null);

  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      // inputRef1.current.focus();
    });

    return () => {
      setCode1('');
      setCode2('');
      setCode3('');
      setCode4('');
      setCode5('');
      setCode6('');
    };
  }, []);

  React.useEffect(() => {
    // Use getHash to retrieve the hash
    if (Platform.OS === 'android') {
      getHash()
        .then(hash => {
          console.log('Hash:', hash);
          // Use the retrieved hash in your logic
          startOtpListener(message => {
            console.log('Message:', message);
            if (message != null) {
              const otp = /(\d{6})/g.exec(message)?.[1];
              if (otp) {
                setCode1(otp[0]);
                setCode2(otp[1]);
                setCode3(otp[2]);
                setCode4(otp[3]);
                setCode5(otp[4]);
                setCode6(otp[5]);
              }
            }
          });
        })
        .catch(error => {
          console.error('Error retrieving hash:', error);
        });
      return () => {
        removeListener();
      };
    }
  }, []);

  React.useEffect(() => {
    // Start the timer countdown
    const countdown = setTimeout(() => {
      // Decrease timer by 1 every second
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clear the timer when it reaches 0
    if (timer === 0) {
      clearTimeout(countdown);
      // setIsButtonDisabled(false); // Enable the button when timer is up
    }

    // Clean up the timer when component unmounts or timer reaches 0
    return () => clearTimeout(countdown);
  }, [timer]); // Re-run effect when timer changes

  const confirmCode = async () => {
    Keyboard.dismiss();
    setLoading(true);
    const code = `${code1}${code2}${code3}${code4}${code5}${code6}`;
    console.log('Code', code);
    if (code?.length < 6) {
      console.log(code, ' =============> OTP');
    }else {
      navigation.navigate('App')
    }
    setLoading(false);
  };

  const setCodeHandler = React.useCallback(
    (value: string, callback: (value: string) => void) => {
      console.log('value=======================', value);
      callback(value);
    },
    [],
  );

  const handleOTPChange = (code: string) => {
    console.log('code--------------------------', code);
    let timeDifference = new Date().getTime() - (firstInputTime?.getTime() || 0);

    if (!firstInputTime && code.length === 1) {
      setFirstInputTime(new Date());
    }
    if (firstInputTime && code.length === 2) {
      const currentTime = new Date();
      const timeDifference = currentTime.getTime() - firstInputTime.getTime();
      console.log('Time between first and second input:', timeDifference);
      setFirstInputTime(null);
    }

    if (timeDifference < 50) {
      inputRef6?.current?.focus();
    }

    if (code.length === 6) {
      setCode1(code[0]);
      setCode2(code[1]);
      setCode3(code[2]);
      setCode4(code[3]);
      setCode5(code[4]);
      setCode6(code[5]);
    } else {
      setCode1(code);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <>
          <View style={styles.otpInputWrapper}>
            <View
              style={styles.otpInputContainer}>
              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef1}
                onKeyPress={e => {
                  if (e.nativeEvent.key !== 'Backspace') {
                    inputRef2?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, handleOTPChange);
                }}
                keyboardType="number-pad"
                value={code1}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
              />

              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef2}
                onKeyPress={e => {
                  if (e.nativeEvent.key === 'Backspace') {
                    inputRef1?.current?.focus();
                  }
                  if (e.nativeEvent.key !== 'Backspace') {
                    inputRef3?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, setCode2);
                }}
                keyboardType="number-pad"
                value={code2}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
              />

              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef3}
                onKeyPress={e => {
                  if (e.nativeEvent.key === 'Backspace') {
                    inputRef2?.current?.focus();
                  }
                  if (e.nativeEvent.key !== 'Backspace') {
                    inputRef4?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, setCode3);
                }}
                keyboardType="number-pad"
                value={code3}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
              />

              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef4}
                onKeyPress={e => {
                  if (e.nativeEvent.key === 'Backspace') {
                    inputRef3?.current?.focus();
                  }
                  if (e.nativeEvent.key !== 'Backspace') {
                    inputRef5?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, setCode4);
                }}
                keyboardType="number-pad"
                value={code4}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
              />

              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef5}
                onKeyPress={e => {
                  if (e.nativeEvent.key === 'Backspace') {
                    inputRef4?.current?.focus();
                  }
                  if (e.nativeEvent.key !== 'Backspace') {
                    inputRef6?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, setCode5);
                }}
                keyboardType="number-pad"
                value={code5}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
              />

              <OtpInput
                style={[styles.ext, styles.inputs]}
                ref={inputRef6}
                onKeyPress={e => {
                  if (e.nativeEvent.key === 'Backspace') {
                    inputRef5?.current?.focus();
                  }
                }}
                onChangeText={e => {
                  setCodeHandler(e, setCode6);
                }}
                keyboardType="number-pad"
                value={code6}
                autoComplete="sms-otp"
                textContentType="oneTimeCode"
                maxLength={1}
                onSubmitEditing={confirmCode}
              />
            </View>
          </View>
          <CButton title="Verify" onPress={confirmCode} disabled={loading} />
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

//
export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    color: 'black',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    paddingHorizontal: 0,
  },
  ext: {
    marginBottom: 0,
    borderBottomWidth: 2,
    width: 30,
    padding: 0,
    justifyContent: 'center',
  },
  otpInputWrapper: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  otpInputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: verticalScale(30),
    width: '90%',
  }
});
