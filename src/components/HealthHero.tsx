import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Props = {
  onSkip?: () => void;
  showSkip?: boolean;
};

function HealthHero({ onSkip, showSkip = false }: Props) {
  return (
    <View style={styles.hero}>
      <SafeAreaView style={styles.heroSafeArea}>
        {showSkip ? (
          <Pressable
            onPress={onSkip}
            style={({ pressed }) => [
              styles.skipButton,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.skipText}>Skip login&gt;&gt;</Text>
          </Pressable>
        ) : (
          <View style={styles.skipPlaceholder} />
        )}

        <View style={styles.illustration}>
          <View style={styles.clipboardShadow} />
          <View style={styles.clipboard}>
            <View style={styles.clipTop}>
              <View style={styles.clipHole} />
            </View>
            <View style={styles.formLineWide} />
            <View style={styles.formLine} />
            <View style={styles.formRow}>
              <View style={styles.formBox} />
              <View style={styles.formLines}>
                <View style={styles.formLineShort} />
                <View style={styles.formLineShort} />
                <View style={styles.formLineShort} />
              </View>
            </View>
            <View style={styles.formLineWide} />
            <View style={styles.formLineWide} />
            <View style={styles.formLineWide} />
          </View>

          <View style={styles.heart}>
            <View style={styles.heartTopLeft} />
            <View style={styles.heartTopRight} />
            <View style={styles.heartBody} />
          </View>

          <View style={styles.doctor}>
            <View style={styles.head} />
            <View style={styles.hair} />
            <View style={styles.neck} />
            <View style={styles.coat}>
              <View style={styles.shirt} />
            </View>
            <View style={styles.armLeft} />
            <View style={styles.armRight} />
            <View style={styles.legLeft} />
            <View style={styles.legRight} />
            <View style={styles.shoeLeft} />
            <View style={styles.shoeRight} />
          </View>

          <View style={styles.pillBottle}>
            <View style={styles.bottleCap} />
            <View style={styles.bottleLine} />
            <View style={styles.bottleLineBottom} />
          </View>
        </View>

        <Text style={styles.heroTitle}>Discover best health services</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    backgroundColor: '#7658bd',
    borderBottomLeftRadius: 48,
    borderBottomRightRadius: 48,
    minHeight: 450,
    overflow: 'hidden',
  },
  heroSafeArea: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 28,
  },
  skipButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  skipPlaceholder: {
    height: 54,
  },
  skipText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '300',
  },
  illustration: {
    height: 300,
    marginTop: -36,
    position: 'relative',
    transform: [{ scale: 0.72 }],
    width: 390,
  },
  clipboardShadow: {
    position: 'absolute',
    top: 78,
    left: 128,
    width: 218,
    height: 288,
    backgroundColor: '#06452e',
    borderRadius: 15,
    transform: [{ rotate: '4deg' }],
  },
  clipboard: {
    position: 'absolute',
    top: 70,
    left: 112,
    width: 218,
    height: 288,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 26,
    paddingTop: 52,
    transform: [{ rotate: '4deg' }],
  },
  clipTop: {
    position: 'absolute',
    top: -48,
    left: 68,
    width: 66,
    height: 86,
    alignItems: 'center',
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 18,
    borderWidth: 1,
    paddingTop: 11,
  },
  clipHole: {
    width: 16,
    height: 16,
    backgroundColor: '#7658bd',
    borderColor: '#06452e',
    borderRadius: 8,
    borderWidth: 1,
  },
  formLineWide: {
    height: 12,
    borderColor: '#06452e',
    borderWidth: 1,
    marginBottom: 12,
  },
  formLine: {
    height: 12,
    borderColor: '#06452e',
    borderWidth: 1,
    marginBottom: 10,
    width: '86%',
  },
  formRow: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 14,
  },
  formBox: {
    height: 66,
    width: 58,
    borderColor: '#06452e',
    borderWidth: 1,
  },
  formLines: {
    flex: 1,
    paddingTop: 4,
  },
  formLineShort: {
    height: 10,
    borderColor: '#06452e',
    borderWidth: 1,
    marginBottom: 8,
  },
  heart: {
    position: 'absolute',
    top: 170,
    left: 46,
    height: 170,
    width: 130,
  },
  heartTopLeft: {
    position: 'absolute',
    top: 8,
    left: 0,
    width: 72,
    height: 88,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 42,
    borderWidth: 1,
    transform: [{ rotate: '-38deg' }],
  },
  heartTopRight: {
    position: 'absolute',
    top: 16,
    right: 6,
    width: 70,
    height: 94,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 44,
    borderWidth: 1,
    transform: [{ rotate: '36deg' }],
  },
  heartBody: {
    position: 'absolute',
    top: 58,
    left: 25,
    width: 82,
    height: 100,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 1,
    transform: [{ rotate: '-28deg' }],
  },
  doctor: {
    position: 'absolute',
    top: 178,
    left: 206,
    height: 172,
    width: 78,
  },
  head: {
    position: 'absolute',
    top: 0,
    left: 26,
    width: 24,
    height: 32,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 8,
    borderWidth: 1,
  },
  hair: {
    position: 'absolute',
    top: -3,
    left: 20,
    width: 32,
    height: 12,
    backgroundColor: '#06452e',
    borderRadius: 6,
  },
  neck: {
    position: 'absolute',
    top: 30,
    left: 34,
    width: 10,
    height: 13,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderWidth: 1,
  },
  coat: {
    position: 'absolute',
    top: 40,
    left: 14,
    width: 52,
    height: 84,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 8,
    borderWidth: 1,
  },
  shirt: {
    position: 'absolute',
    top: 8,
    left: 18,
    width: 18,
    height: 40,
    backgroundColor: '#06452e',
    borderRadius: 4,
  },
  armLeft: {
    position: 'absolute',
    top: 50,
    left: -5,
    width: 36,
    height: 14,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 8,
    borderWidth: 1,
    transform: [{ rotate: '36deg' }],
  },
  armRight: {
    position: 'absolute',
    top: 52,
    right: -2,
    width: 34,
    height: 14,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 8,
    borderWidth: 1,
    transform: [{ rotate: '-20deg' }],
  },
  legLeft: {
    position: 'absolute',
    top: 120,
    left: 25,
    width: 12,
    height: 44,
    backgroundColor: '#06452e',
    borderRadius: 6,
    transform: [{ rotate: '-9deg' }],
  },
  legRight: {
    position: 'absolute',
    top: 120,
    right: 22,
    width: 12,
    height: 44,
    backgroundColor: '#06452e',
    borderRadius: 6,
    transform: [{ rotate: '5deg' }],
  },
  shoeLeft: {
    position: 'absolute',
    bottom: 0,
    left: 17,
    width: 24,
    height: 9,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 7,
    borderWidth: 1,
  },
  shoeRight: {
    position: 'absolute',
    bottom: 0,
    right: 13,
    width: 22,
    height: 9,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 7,
    borderWidth: 1,
  },
  pillBottle: {
    position: 'absolute',
    right: 32,
    bottom: 35,
    width: 54,
    height: 92,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 1,
  },
  bottleCap: {
    position: 'absolute',
    top: -10,
    left: -4,
    width: 62,
    height: 14,
    backgroundColor: '#fcffb5',
    borderColor: '#06452e',
    borderRadius: 6,
    borderWidth: 1,
  },
  bottleLine: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    borderTopColor: '#06452e',
    borderTopWidth: 1,
  },
  bottleLineBottom: {
    position: 'absolute',
    top: 58,
    left: 0,
    right: 0,
    borderTopColor: '#06452e',
    borderTopWidth: 1,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 31,
    fontWeight: '800',
    marginTop: -12,
    textAlign: 'center',
    textShadowColor: 'rgba(20, 16, 42, 0.3)',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 7,
  },
  pressed: {
    opacity: 0.78,
  },
});

export default HealthHero;
