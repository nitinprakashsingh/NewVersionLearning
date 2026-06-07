import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import type { RootStackParamList } from '../navigation/RootNavigator';

type CareItem = {
  id: string;
  icon: string;
  label: string;
};

const careItems: CareItem[] = [
  { id: '1', icon: '🦠', label: 'Disease name-1' },
  { id: '2', icon: '💧', label: 'Disease name-2' },
  { id: '3', icon: '👃', label: 'Disease name-3' },
  { id: '4', icon: '🧠', label: 'Disease name-4' },
  { id: '5', icon: '💚', label: 'Disease name-5' },
];

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#7d56f1" />

      <View style={styles.heroHeader}>
        <Pressable style={styles.iconButton}>
          <Text style={styles.iconText}>≡</Text>
        </Pressable>

        <View style={styles.locationBlock}>
          <Text style={styles.locationLabel}>Location</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>Sector 47, Gurgaon</Text>
            <Text style={styles.locationArrow}>⌄</Text>
          </View>
        </View>

        <Pressable style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Find care for your health</Text>

        <View style={styles.searchCard}>
          <View style={styles.searchInputWrapper}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              placeholder="Search by hospital"
              placeholderTextColor="#52525b"
              style={styles.searchInput}
            />
          </View>
          <Pressable style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </Pressable>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Common Care</Text>
          <Pressable
            onPress={() => navigation.navigate('TopCare')}
            style={({ pressed }) => [styles.viewAllButton, pressed && styles.pressed]}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <View style={styles.cardRow}>
          {careItems.map(item => (
            <View key={item.id} style={styles.categoryCard}>
              <View style={styles.categoryIconWrapper}>
                <Text style={styles.categoryIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}> 
          <Text style={styles.sectionTitle}>Seasonal Care</Text>
          <Pressable
            onPress={() => navigation.navigate('TopCare')}
            style={({ pressed }) => [styles.viewAllButton, pressed && styles.pressed]}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <View style={styles.cardRow}>
          {careItems.map(item => (
            <View key={`seasonal-${item.id}`} style={styles.categoryCard}>
              <View style={styles.categoryIconWrapper}>
                <Text style={styles.categoryIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>

      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Home</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>👨‍⚕️</Text>
          <Text style={styles.tabLabel}>Doctors</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>📷</Text>
          <Text style={styles.tabLabel}>Scan QR</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>📅</Text>
          <Text style={styles.tabLabel}>Bookings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f7ff',
  },
  heroHeader: {
    backgroundColor: '#7d56f1',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 14,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#ffffff',
    fontSize: 22,
  },
  locationBlock: {
    flex: 1,
    marginHorizontal: 14,
  },
  locationLabel: {
    color: '#d8cffd',
    fontSize: 14,
    marginBottom: 4,
  },
  locationRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  locationText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  locationArrow: {
    color: '#ffffff',
    fontSize: 14,
  },
  profileButton: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    fontSize: 20,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 16,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 18,
  },
  searchCard: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 14,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    marginBottom: 24,
  },
  searchInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchIcon: {
    fontSize: 20,
  },
  searchInput: {
    color: '#111827',
    fontSize: 16,
    flex: 1,
    minHeight: 40,
  },
  filterButton: {
    alignItems: 'center',
    backgroundColor: '#1ed0b6',
    borderRadius: 16,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  filterIcon: {
    color: '#ffffff',
    fontSize: 20,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '800',
  },
  viewAllButton: {
    borderColor: '#0f9d81',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  viewAllText: {
    color: '#0f9d81',
    fontWeight: '700',
    fontSize: 14,
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#fbf9ff',
    borderRadius: 20,
    height: 120,
    justifyContent: 'space-between',
    padding: 14,
    width: '19%',
    minWidth: 68,
    maxWidth: 68,
  },
  categoryIconWrapper: {
    alignItems: 'center',
    backgroundColor: '#e8f7f0',
    borderRadius: 18,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    color: '#0f172a',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 16,
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 24,
  },
  tabBar: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopColor: '#e5e7eb',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    color: '#6b7280',
    fontSize: 11,
    fontWeight: '700',
  },
  tabLabelActive: {
    color: '#0f9d81',
  },
});

export default HomeScreen;
