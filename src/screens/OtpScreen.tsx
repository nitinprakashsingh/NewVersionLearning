import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
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

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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
              navigation.navigate('AppDrawer')
            }
            style={({ pressed }) => [
              styles.verifyButton,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.verifyText}>Verify OTP</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  otpPanel: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -46,
    minHeight: 360,
    paddingBottom: 80,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  panelTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  sentRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  sentText: {
    color: '#777777',
    fontSize: 17,
  },
  editButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  editText: {
    color: '#06a96e',
    fontSize: 13,
    fontWeight: '700',
  },
  typedOtp: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '400',
    marginTop: 82,
    paddingLeft: 24,
  },
  otpBoxes: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
    marginTop: 86,
  },
  otpInput: {
    backgroundColor: '#fafafa',
    borderColor: '#eeeeee',
    borderRadius: 9,
    borderWidth: 1,
    color: '#000000',
    elevation: 1,
    fontSize: 22,
    fontWeight: '800',
    height: 37,
    includeFontPadding: false,
    padding: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    flex: 1,
  },
  resendText: {
    color: '#777777',
    fontSize: 18,
    marginTop: 46,
    paddingLeft: 8,
  },
  verifyButton: {
    alignItems: 'center',
    backgroundColor: '#10b79f',
    borderRadius: 16,
    height: 47,
    justifyContent: 'center',
    marginTop: 46,
  },
  verifyText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
  },
});

export default OtpScreen;
