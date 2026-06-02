import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const shriyanLogo = require('../Assets/ShriyanLogo.png');

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={shriyanLogo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 32,
  },
  logo: {
    height: 180,
    maxHeight: '40%',
    maxWidth: '80%',
    width: 180,
  },
});

export default SplashScreen;
