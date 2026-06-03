import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function LoginScreen({ navigation }: Props) {
  const [mobileNumber, setMobileNumber] = useState('');
  const isValidMobile = /^[0-9]{10}$/.test(mobileNumber);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#7658bd" />

      <HealthHero
        showSkip
        onSkip={() =>
          navigation.navigate('Details', {
            message: 'Login skipped',
          })
        }
      />

      <View style={styles.loginPanel}>
        <Text style={styles.panelTitle}>Continue</Text>

        <TextInput
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={setMobileNumber}
          placeholder="Enter mobile number"
          placeholderTextColor="#111111"
          style={styles.input}
          value={mobileNumber}
        />

        {!isValidMobile && mobileNumber.length > 0 ? (
          <Text style={styles.errorText}>Please enter a valid 10-digit mobile number.</Text>
        ) : null}

        <Pressable
          onPress={() =>
            isValidMobile &&
            navigation.navigate('Otp', {
              mobileNumber,
            })
          }
          style={({ pressed }) => [
            styles.continueButton,
            !isValidMobile && styles.disabledButton,
            pressed && styles.pressed,
          ]}
          disabled={!isValidMobile}>
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>

        <Text style={styles.termsText}>
          By continuing you agree to our T&amp;Cs and Privacy Policy
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loginPanel: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 46,
    borderTopRightRadius: 46,
    marginTop: -46,
    minHeight: 360,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  panelTitle: {
    color: '#000000',
    fontSize: 31,
    fontWeight: '800',
    marginBottom: 46,
    marginLeft: 22,
  },
  input: {
    backgroundColor: '#fafafa',
    borderColor: '#eeeeee',
    borderRadius: 14,
    borderWidth: 1,
    color: '#111111',
    fontSize: 24,
    height: 96,
    paddingHorizontal: 32,
  },
  continueButton: {
    alignItems: 'center',
    backgroundColor: '#10b79f',
    borderRadius: 22,
    height: 96,
    justifyContent: 'center',
    marginTop: 48,
  },
  disabledButton: {
    backgroundColor: '#91d6ca',
  },
  continueText: {
    color: '#ffffff',
    fontSize: 29,
    fontWeight: '800',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 16,
    marginTop: 12,
    marginLeft: 6,
  },
  termsText: {
    color: '#777777',
    fontSize: 21,
    fontWeight: '400',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  pressed: {
    opacity: 0.78,
  },
});

export default LoginScreen;
