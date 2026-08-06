import type { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HomeScreenProps = { navigation: DrawerNavigationProp<any> };

const actions = [
  { icon: '▣', title: 'Appointments', subtitle: 'View and manage bookings' },
  { icon: '♥', title: 'Saved care', subtitle: 'Doctors and hospitals you trust' },
  { icon: '▤', title: 'Health records', subtitle: 'Access your medical history' },
  { icon: '◎', title: 'Family members', subtitle: 'Care for your loved ones' },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity accessibilityLabel="Open menu" onPress={() => navigation.openDrawer()} style={styles.menuButton}><Text style={styles.menuIcon}>☰</Text></TouchableOpacity>
          <View><Text style={styles.greeting}>Good morning</Text><Text style={styles.name}>Amit</Text></View>
          <View style={styles.avatar}><Text style={styles.avatarText}>AY</Text></View>
        </View>
        <View style={styles.healthCard}>
          <View style={styles.cardDecoration} /><Text style={styles.cardEyebrow}>ABHA HEALTH ID</Text>
          <Text style={styles.cardTitle}>Your health,{`\n`}all in one place.</Text>
          <Text style={styles.cardSubtext}>Securely access the services that matter to you.</Text>
          <TouchableOpacity style={styles.cardButton}><Text style={styles.cardButtonText}>View profile  →</Text></TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Your health hub</Text><Text style={styles.sectionHint}>Explore</Text></View>
        <View style={styles.actionGrid}>{actions.map(action => <TouchableOpacity key={action.title} style={styles.actionCard}><View style={styles.actionIcon}><Text style={styles.actionIconText}>{action.icon}</Text></View><Text style={styles.actionTitle}>{action.title}</Text><Text style={styles.actionSubtitle}>{action.subtitle}</Text></TouchableOpacity>)}</View>
        <Text style={styles.sectionTitle}>Discover care</Text>
        <TouchableOpacity style={styles.discoverCard}><View style={styles.discoverIcon}><Text style={styles.discoverIconText}>⌕</Text></View><View style={styles.discoverCopy}><Text style={styles.discoverTitle}>Find a hospital nearby</Text><Text style={styles.discoverSubtitle}>Search verified providers around you</Text></View><Text style={styles.chevron}>›</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F8FC' }, content: { padding: 20, paddingBottom: 32 },
  header: { alignItems: 'center', flexDirection: 'row', marginBottom: 25 }, menuButton: { alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 14, elevation: 2, height: 46, justifyContent: 'center', marginRight: 13, shadowColor: '#101828', shadowOpacity: 0.06, shadowRadius: 7, width: 46 }, menuIcon: { color: '#344054', fontSize: 23 },
  greeting: { color: '#667085', fontSize: 13 }, name: { color: '#172033', fontSize: 20, fontWeight: '800' }, avatar: { alignItems: 'center', backgroundColor: '#E7E0FF', borderRadius: 18, height: 36, justifyContent: 'center', marginLeft: 'auto', width: 36 }, avatarText: { color: '#49348B', fontSize: 12, fontWeight: '800' },
  healthCard: { backgroundColor: '#49348B', borderRadius: 22, minHeight: 216, overflow: 'hidden', padding: 23 }, cardDecoration: { backgroundColor: '#725CB1', borderRadius: 100, height: 200, position: 'absolute', right: -63, top: -50, width: 200 }, cardEyebrow: { color: '#B9AAED', fontSize: 11, fontWeight: '800', letterSpacing: 1 }, cardTitle: { color: '#FFFFFF', fontSize: 27, fontWeight: '800', letterSpacing: -0.5, lineHeight: 32, marginTop: 9 }, cardSubtext: { color: '#DDD7F6', fontSize: 13, lineHeight: 19, marginTop: 9, maxWidth: '78%' }, cardButton: { backgroundColor: '#A5F3E2', borderRadius: 10, marginTop: 15, paddingHorizontal: 13, paddingVertical: 9, alignSelf: 'flex-start' }, cardButtonText: { color: '#234D49', fontSize: 13, fontWeight: '800' },
  sectionHeader: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14, marginTop: 28 }, sectionTitle: { color: '#172033', fontSize: 19, fontWeight: '800' }, sectionHint: { color: '#0F9D88', fontSize: 13, fontWeight: '700' },
  actionGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28 }, actionCard: { backgroundColor: '#FFFFFF', borderColor: '#EAECF0', borderRadius: 17, borderWidth: 1, minHeight: 148, padding: 15, width: '48.2%' }, actionIcon: { alignItems: 'center', backgroundColor: '#EDF9F7', borderRadius: 10, height: 34, justifyContent: 'center', width: 34 }, actionIconText: { color: '#0F9D88', fontSize: 20, fontWeight: '700' }, actionTitle: { color: '#344054', fontSize: 15, fontWeight: '800', marginTop: 13 }, actionSubtitle: { color: '#98A2B3', fontSize: 12, lineHeight: 17, marginTop: 5 },
  discoverCard: { alignItems: 'center', backgroundColor: '#FFFFFF', borderColor: '#EAECF0', borderRadius: 16, borderWidth: 1, flexDirection: 'row', marginTop: 13, padding: 15 }, discoverIcon: { alignItems: 'center', backgroundColor: '#EEEAFE', borderRadius: 12, height: 44, justifyContent: 'center', width: 44 }, discoverIconText: { color: '#49348B', fontSize: 26, fontWeight: '700' }, discoverCopy: { flex: 1, marginLeft: 12 }, discoverTitle: { color: '#344054', fontSize: 15, fontWeight: '800' }, discoverSubtitle: { color: '#98A2B3', fontSize: 12, marginTop: 4 }, chevron: { color: '#667085', fontSize: 28 },
});
