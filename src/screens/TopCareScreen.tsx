import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
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
  category: string;
};

const categories = [
  'All',
  'Heart',
  'Liver',
  'Kidney',
  'Stomach',
  'Brain',
  'Lung',
  'Eye',
];

const careItems: CareItem[] = [
  { id: '1', icon: '🦠', label: 'Heart attack', category: 'Heart' },
  { id: '2', icon: '💧', label: 'Heart Failure', category: 'Heart' },
  { id: '3', icon: '👃', label: 'Angina', category: 'Heart' },
  { id: '4', icon: '🧬', label: 'High BP', category: 'Heart' },
  { id: '5', icon: '🧠', label: 'Stroke', category: 'Brain' },
  { id: '6', icon: '👁️', label: 'Eye Care', category: 'Eye' },
  { id: '7', icon: '🫁', label: 'Lung Care', category: 'Lung' },
  { id: '8', icon: '🩸', label: 'Kidney Stone', category: 'Kidney' },
  { id: '9', icon: '🦴', label: 'Stomach Pain', category: 'Stomach' },
  { id: '10', icon: '🩹', label: 'Liver Care', category: 'Liver' },
  { id: '11', icon: '🦠', label: 'Heart Rhythm', category: 'Heart' },
  { id: '12', icon: '🫀', label: 'Valve Care', category: 'Heart' },
  { id: '13', icon: '🦴', label: 'Gastric Issue', category: 'Stomach' },
  { id: '14', icon: '🧬', label: 'Kidney Infection', category: 'Kidney' },
  { id: '15', icon: '💡', label: 'Brain Health', category: 'Brain' },
  { id: '16', icon: '👁️', label: 'Vision Care', category: 'Eye' },
];

function TopCareScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'TopCare'>>();
  const [selectedTab, setSelectedTab] = useState('Heart');
  const [searchText, setSearchText] = useState('');

  const filteredItems = useMemo(() => {
    return careItems.filter(item => {
      const matchesTab = selectedTab === 'All' || item.category === selectedTab;
      const matchesSearch = item.label
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchText]);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#7d56f1" />

      <View style={styles.heroHeader}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Top Care</Text>

        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.searchCard}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search by hospital"
            placeholderTextColor="#718096"
            style={styles.searchInput}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsScroll}>
          {categories.map(category => (
            <Pressable
              key={category}
              onPress={() => setSelectedTab(category)}
              style={({ pressed }) => [
                styles.tabButton,
                selectedTab === category && styles.tabButtonActive,
                pressed && styles.pressed,
              ]}>
              <Text
                style={
                  selectedTab === category
                    ? styles.tabTextActive
                    : styles.tabText
                }>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.gridContainer}>
          {filteredItems.map(item => (
            <View key={item.id} style={styles.categoryCard}>
              <View style={styles.categoryIconWrapper}>
                <Text style={styles.categoryIcon}>{item.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 20,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 14,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  backIcon: {
    color: '#ffffff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  headerPlaceholder: {
    width: 42,
  },
  content: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  searchCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 22,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchIcon: {
    fontSize: 18,
  },
  searchInput: {
    color: '#111827',
    flex: 1,
    fontSize: 16,
    minHeight: 40,
  },
  tabsScroll: {
    gap: 10,
    paddingBottom: 12,
  },
  tabButton: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#c7d2fe',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  tabButtonActive: {
    backgroundColor: '#10b79f',
    borderColor: '#10b79f',
  },
  tabText: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#fbf9ff',
    borderRadius: 20,
    height: 124,
    justifyContent: 'space-between',
    padding: 14,
    width: '23%',
    minWidth: 76,
  },
  categoryIconWrapper: {
    alignItems: 'center',
    backgroundColor: '#e8f7f0',
    borderRadius: 18,
    height: 54,
    justifyContent: 'center',
    width: 54,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    color: '#0f172a',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 16,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.78,
  },
});

export default TopCareScreen;
