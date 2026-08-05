import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FirstScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nitin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '700',
  },
});

export default FirstScreen;
