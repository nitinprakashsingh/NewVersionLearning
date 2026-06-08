import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeScreenProps = {
  navigation: DrawerNavigationProp<any>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header with menu button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Welcome</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to ABHA Health</Text>
          <Text style={styles.welcomeSubtitle}>
            Your comprehensive health companion
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>📅</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Your Bookings</Text>
              <Text style={styles.actionSubtitle}>View your appointments</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>❤️</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Saved Doctors</Text>
              <Text style={styles.actionSubtitle}>Your favorite doctors</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>📋</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Medical Records</Text>
              <Text style={styles.actionSubtitle}>Fetch your records</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <View style={styles.actionIcon}>
              <Text style={styles.iconText}>👥</Text>
            </View>
            <View style={styles.actionContent}>
              <Text style={styles.actionTitle}>Family</Text>
              <Text style={styles.actionSubtitle}>Manage family members</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Featured Services</Text>

          <TouchableOpacity style={styles.featuredCard}>
            <Text style={styles.featuredIcon}>🏥</Text>
            <Text style={styles.featuredTitle}>Find Hospitals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featuredCard}>
            <Text style={styles.featuredIcon}>👨‍⚕️</Text>
            <Text style={styles.featuredTitle}>Consult Doctors</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuIcon: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  welcomeCard: {
    margin: 16,
    padding: 20,
    backgroundColor: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
    borderRadius: 12,
    justifyContent: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: '#e0e7ff',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  actionCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  featuredCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  featuredIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featuredTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
});
