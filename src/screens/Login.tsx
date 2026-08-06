import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import type { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({ navigation }: Props) {
  const [mobileNumber, setMobileNumber] = useState('');
  const phoneInput = useRef<TextInput>(null);
  const isValidMobile = /^[0-9]{10}$/.test(mobileNumber);

  const continueToOtp = () => {
    if (isValidMobile) {
      navigation.navigate('Otp', { mobileNumber });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#49348b" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.screen}>
        <View style={styles.hero}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>+</Text>
            </View>
            <Text style={styles.brandName}>ABHA Health</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Details', { message: 'Login skipped' })}
            style={styles.skipButton}>
            <Text style={styles.skipText}>Skip for now</Text>
          </Pressable>

          <View style={styles.heroCopy}>
            <Text style={styles.eyebrow}>YOUR HEALTH, SIMPLIFIED</Text>
            <Text style={styles.heroTitle}>Care that stays{`\n`}close to you.</Text>
            <Text style={styles.heroSubtitle}>
              Manage appointments, records, and health services in one secure place.
            </Text>
          </View>
          <View style={styles.heroOrbs}>
            <View style={styles.orbLarge} />
            <View style={styles.orbSmall} />
            <Text style={styles.heroIcon}>♥</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.description}>Enter your mobile number to continue.</Text>

          <Text style={styles.label}>Mobile number</Text>
          <Pressable onPress={() => phoneInput.current?.focus()} style={styles.inputShell}>
            <View style={styles.countryCode}><Text style={styles.countryCodeText}>+91</Text></View>
            <TextInput
              ref={phoneInput}
              autoFocus
              keyboardType="phone-pad"
              maxLength={10}
              onChangeText={value => setMobileNumber(value.replace(/[^0-9]/g, ''))}
              placeholder="10-digit mobile number"
              placeholderTextColor="#98A2B3"
              returnKeyType="done"
              showSoftInputOnFocus
              style={styles.input}
              textContentType="telephoneNumber"
              value={mobileNumber}
            />
          </Pressable>
          {mobileNumber.length > 0 && !isValidMobile ? (
            <Text style={styles.errorText}>Enter a valid 10-digit mobile number.</Text>
          ) : null}

          <Pressable
            accessibilityRole="button"
            disabled={!isValidMobile}
            onPress={continueToOtp}
            style={({ pressed }) => [
              styles.continueButton,
              !isValidMobile && styles.continueButtonDisabled,
              pressed && isValidMobile && styles.pressed,
            ]}>
            <Text style={styles.continueText}>Continue</Text>
            <Text style={styles.arrow}>→</Text>
          </Pressable>
          <Text style={styles.termsText}>By continuing, you agree to our Terms of Service and Privacy Policy.</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#49348b' },
  screen: { flex: 1, backgroundColor: '#F7F8FC' },
  hero: { backgroundColor: '#49348b', minHeight: 310, overflow: 'hidden', paddingHorizontal: 24, paddingTop: 18 },
  brandRow: { alignItems: 'center', flexDirection: 'row', gap: 9 },
  brandMark: { alignItems: 'center', backgroundColor: '#A5F3E2', borderRadius: 10, height: 30, justifyContent: 'center', width: 30 },
  brandMarkText: { color: '#49348b', fontSize: 24, fontWeight: '800', lineHeight: 28 },
  brandName: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  skipButton: { alignSelf: 'flex-end', paddingVertical: 6, position: 'absolute', right: 24, top: 18 },
  skipText: { color: '#E9E4FF', fontSize: 14, fontWeight: '600' },
  heroCopy: { marginTop: 47, maxWidth: '76%' },
  eyebrow: { color: '#B9AAED', fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  heroTitle: { color: '#FFFFFF', fontSize: 34, fontWeight: '800', letterSpacing: -0.7, lineHeight: 40, marginTop: 10 },
  heroSubtitle: { color: '#DDD7F6', fontSize: 15, lineHeight: 22, marginTop: 10 },
  heroOrbs: { bottom: -4, height: 150, position: 'absolute', right: -9, width: 154 },
  orbLarge: { backgroundColor: '#6F55B9', borderRadius: 75, height: 150, position: 'absolute', right: 0, width: 150 },
  orbSmall: { backgroundColor: '#A5F3E2', borderRadius: 25, height: 50, left: 3, position: 'absolute', top: 19, width: 50 },
  heroIcon: { color: '#49348B', fontSize: 29, left: 14, position: 'absolute', top: 29 },
  content: { backgroundColor: '#F7F8FC', borderTopLeftRadius: 28, borderTopRightRadius: 28, flex: 1, marginTop: -22, paddingHorizontal: 24, paddingTop: 30 },
  title: { color: '#172033', fontSize: 27, fontWeight: '800', letterSpacing: -0.5 },
  description: { color: '#667085', fontSize: 15, marginTop: 5 },
  label: { color: '#344054', fontSize: 14, fontWeight: '700', marginTop: 28 },
  inputShell: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#D0D5DD', borderRadius: 14, borderWidth: 1, flexDirection: 'row', height: 58, marginTop: 9, paddingHorizontal: 14 },
  countryCode: { borderRightColor: '#EAECF0', borderRightWidth: 1, paddingRight: 12 },
  countryCodeText: { color: '#344054', fontSize: 16, fontWeight: '700' },
  input: { color: '#172033', flex: 1, fontSize: 16, height: '100%', paddingLeft: 12 },
  errorText: { color: '#D92D20', fontSize: 13, marginTop: 7 },
  continueButton: { alignItems: 'center', backgroundColor: '#0F9D88', borderRadius: 14, flexDirection: 'row', height: 56, justifyContent: 'center', marginTop: 28 },
  continueButtonDisabled: { backgroundColor: '#B8DCD6' },
  continueText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  arrow: { color: '#FFFFFF', fontSize: 23, marginLeft: 10 },
  termsText: { color: '#98A2B3', fontSize: 12, lineHeight: 18, marginTop: 18, textAlign: 'center' },
  pressed: { opacity: 0.85 },
});

export default LoginScreen;
