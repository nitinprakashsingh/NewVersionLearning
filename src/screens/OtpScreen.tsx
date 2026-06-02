import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import HealthHero from '../components/HealthHero';
import type { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Otp'>;

const otpLength = 6;

function OtpScreen({ navigation, route }: Props) {
  const [otp, setOtp] = useState(['9', '9', '', '', '', '9']);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const mobileNumber = route.params.mobileNumber;

  const displayOtp = useMemo(() => otp.join(''), [otp]);

  const updateOtp = (value: string, index: number) => {
    const nextValue = value.slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = nextValue;
    setOtp(nextOtp);

    if (nextValue && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#7658bd" />

      <HealthHero />

      <View style={styles.otpPanel}>
        <Text style={styles.panelTitle}>Verify OTP</Text>

        <View style={styles.sentRow}>
          <Text style={styles.sentText}>Otp sent to {mobileNumber}</Text>
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              styles.editButton,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </View>

        <Text style={styles.typedOtp}>{displayOtp}</Text>

        <View style={styles.otpBoxes}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={value => updateOtp(value, index)}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={styles.otpInput}
              textAlign="center"
              value={digit}
            />
          ))}
        </View>

        <Text style={styles.resendText}>Resend OTP in 00.30</Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Details', {
              message: `OTP verified: ${displayOtp}`,
            })
          }
          style={({ pressed }) => [
            styles.verifyButton,
            pressed && styles.pressed,
          ]}>
          <Text style={styles.verifyText}>Verify OTP</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  otpPanel: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    marginTop: -46,
    minHeight: 360,
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  panelTitle: {
    color: '#000000',
    fontSize: 31,
    fontWeight: '800',
    marginBottom: 10,
  },
  sentRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  sentText: {
    color: '#777777',
    fontSize: 24,
  },
  editButton: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  editText: {
    color: '#06a96e',
    fontSize: 16,
    fontWeight: '700',
  },
  typedOtp: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '400',
    marginTop: 58,
    paddingLeft: 24,
  },
  otpBoxes: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    marginTop: 28,
  },
  otpInput: {
    backgroundColor: '#fafafa',
    borderColor: '#eeeeee',
    borderRadius: 14,
    borderWidth: 1,
    color: '#000000',
    elevation: 1,
    fontSize: 30,
    fontWeight: '800',
    height: 74,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    flex: 1,
  },
  resendText: {
    color: '#777777',
    fontSize: 24,
    marginTop: 45,
    paddingLeft: 8,
  },
  verifyButton: {
    alignItems: 'center',
    backgroundColor: '#10b79f',
    borderRadius: 22,
    height: 94,
    justifyContent: 'center',
    marginTop: 40,
  },
  verifyText: {
    color: '#ffffff',
    fontSize: 29,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
  },
});

export default OtpScreen;
