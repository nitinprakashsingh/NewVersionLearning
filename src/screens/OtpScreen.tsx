import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

import type { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Otp'>;
const otpLength = 6;

function OtpScreen({ navigation, route }: Props) {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);
  const isComplete = otp.every(Boolean);

  const updateOtp = (value: string, index: number) => {
    const digit = value.replace(/[^0-9]/g, '').slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < otpLength - 1) inputs.current[index + 1]?.focus();
  };

  const onKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && !otp[index] && index > 0) inputs.current[index - 1]?.focus();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#49348B" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.screen}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}><Text style={styles.backText}>‹</Text></Pressable>
          <Text style={styles.headerTitle}>Verify your number</Text>
          <View style={styles.headerSpacer} />
        </View>
        <View style={styles.iconCircle}><Text style={styles.iconText}>✦</Text></View>
        <View style={styles.content}>
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.description}>We sent a 6-digit code to</Text>
          <View style={styles.numberRow}>
            <Text style={styles.numberText}>+91 {route.params.mobileNumber}</Text>
            <Pressable onPress={() => navigation.goBack()}><Text style={styles.editText}>Change</Text></Pressable>
          </View>
          <View style={styles.otpRow}>
            {otp.map((digit, index) => (
              <TextInput
                autoFocus={index === 0}
                keyboardType="number-pad"
                key={index}
                maxLength={1}
                onChangeText={value => updateOtp(value, index)}
                onKeyPress={({ nativeEvent }) => onKeyPress(nativeEvent.key, index)}
                ref={ref => { inputs.current[index] = ref; }}
                selectTextOnFocus
                style={[styles.otpInput, Boolean(digit) && styles.otpInputFilled]}
                textAlign="center"
                value={digit}
              />
            ))}
          </View>
          <Text style={styles.helperText}>The code expires in <Text style={styles.timerText}>00:30</Text></Text>
          <Pressable style={styles.resendButton}><Text style={styles.resendText}>Resend code</Text></Pressable>
          <Pressable disabled={!isComplete} onPress={() => navigation.replace('AppDrawer')} style={({ pressed }) => [styles.verifyButton, !isComplete && styles.verifyButtonDisabled, pressed && isComplete && styles.pressed]}>
            <Text style={styles.verifyText}>Verify and continue</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#49348B' }, screen: { flex: 1, backgroundColor: '#F7F8FC' },
  header: { alignItems: 'center', backgroundColor: '#49348B', flexDirection: 'row', height: 68, justifyContent: 'space-between', paddingHorizontal: 20 },
  backButton: { alignItems: 'center', height: 38, justifyContent: 'center', width: 38 }, backText: { color: '#FFFFFF', fontSize: 37, fontWeight: '300', lineHeight: 38 },
  headerTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }, headerSpacer: { width: 38 },
  iconCircle: { alignItems: 'center', alignSelf: 'center', backgroundColor: '#A5F3E2', borderColor: '#FFFFFF', borderRadius: 43, borderWidth: 6, height: 86, justifyContent: 'center', marginBottom: -43, marginTop: 16, width: 86, zIndex: 1 },
  iconText: { color: '#49348B', fontSize: 35 }, content: { backgroundColor: '#F7F8FC', flex: 1, paddingHorizontal: 24, paddingTop: 76 },
  title: { color: '#172033', fontSize: 26, fontWeight: '800', letterSpacing: -0.5, textAlign: 'center' }, description: { color: '#667085', fontSize: 15, marginTop: 10, textAlign: 'center' },
  numberRow: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 7 }, numberText: { color: '#344054', fontSize: 15, fontWeight: '700' }, editText: { color: '#0F9D88', fontSize: 14, fontWeight: '800', marginLeft: 10 },
  otpRow: { flexDirection: 'row', gap: 8, marginTop: 36 }, otpInput: { backgroundColor: '#FFFFFF', borderColor: '#D0D5DD', borderRadius: 12, borderWidth: 1, color: '#172033', flex: 1, fontSize: 21, fontWeight: '800', height: 53 }, otpInputFilled: { borderColor: '#0F9D88', borderWidth: 2 },
  helperText: { color: '#667085', fontSize: 14, marginTop: 22, textAlign: 'center' }, timerText: { color: '#49348B', fontWeight: '800' }, resendButton: { alignSelf: 'center', padding: 12, marginTop: 5 }, resendText: { color: '#0F9D88', fontSize: 14, fontWeight: '800' },
  verifyButton: { alignItems: 'center', backgroundColor: '#0F9D88', borderRadius: 14, height: 56, justifyContent: 'center', marginTop: 24 }, verifyButtonDisabled: { backgroundColor: '#B8DCD6' }, verifyText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' }, pressed: { opacity: 0.85 },
});

export default OtpScreen;
