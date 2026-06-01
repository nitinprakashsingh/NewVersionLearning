import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function DetailsScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subtitle}>
        {route.params?.message ?? 'This screen was opened from the stack.'}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#4b5563',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 6,
    minWidth: 120,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailsScreen;
