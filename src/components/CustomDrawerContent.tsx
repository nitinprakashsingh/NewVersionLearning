import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

interface DrawerItem {
  label: string;
  icon: string;
  onPress: () => void;
}

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const { navigation } = props;

  const drawerItems: DrawerItem[] = [
    {
      label: 'ABHA Profile',
      icon: '👤',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('ABHA Profile', 'Navigate to ABHA Profile screen');
      },
    },
    {
      label: 'Your Bookings',
      icon: '📅',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('Your Bookings', 'Navigate to Bookings screen');
      },
    },
    {
      label: 'Link ABHA Account',
      icon: '🔗',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('Link ABHA Account', 'Navigate to Link Account screen');
      },
    },
    {
      label: 'Saved Doctors/Hospitals',
      icon: '❤️',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('Saved Doctors', 'Navigate to Saved Doctors screen');
      },
    },
    {
      label: 'Fetch Records',
      icon: '📋',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('Fetch Records', 'Navigate to Medical Records screen');
      },
    },
    {
      label: 'My Family',
      icon: '👨‍👩‍👧‍👦',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('My Family', 'Navigate to Family Members screen');
      },
    },
  ];

  const bottomItems = [
    {
      label: 'Contact Us',
      icon: '📞',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('Contact Us', 'Navigate to Contact Us screen');
      },
    },
    {
      label: 'About Us',
      icon: 'ℹ️',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('About Us', 'Navigate to About Us screen');
      },
    },
    {
      label: 'FAQs',
      icon: '❓',
      onPress: () => {
        navigation.closeDrawer();
        Alert.alert('FAQs', 'Navigate to FAQs screen');
      },
    },
  ];

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', onPress: () => {}, style: 'cancel' },
      {
        text: 'Log Out',
        onPress: () => {
          navigation.closeDrawer();
          navigation.getParent()?.navigate('Login');
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <TouchableOpacity style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/80?text=Amit',
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Amit Yadav</Text>
            <Text style={styles.profilePhone}>9987810048</Text>
            <Text style={styles.profileEmail}>9987810048@idhs.in</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editIcon}>✏️</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Language Toggle */}
        <View style={styles.languageContainer}>
          <TouchableOpacity style={styles.languageOption}>
            <Text style={styles.languageText}>Hindi</Text>
          </TouchableOpacity>
          <View style={styles.toggleSwitch}>
            <View style={styles.toggleActive} />
          </View>
          <TouchableOpacity style={styles.languageOption}>
            <Text style={[styles.languageText, styles.languageActive]}>
              English
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu Items */}
      <ScrollView style={styles.menuScroll} showsVerticalScrollIndicator={false}>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={item.onPress}>
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.divider} />

        {bottomItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bottomItem}
            onPress={item.onPress}>
            <Text style={styles.bottomIcon}>{item.icon}</Text>
            <Text style={styles.bottomLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.divider} />

        {/* Log Out */}
        <TouchableOpacity
          style={styles.logoutItem}
          onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🚪</Text>
          <Text style={styles.logoutLabel}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileCard: {
    backgroundColor: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e7ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  profilePhone: {
    fontSize: 13,
    color: '#ffffff',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 12,
    color: '#e0e7ff',
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    fontSize: 18,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'center',
  },
  languageOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  languageText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9ca3af',
  },
  languageActive: {
    color: '#00b4d8',
    fontWeight: '600',
  },
  toggleSwitch: {
    width: 32,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#00b4d8',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 2,
    marginHorizontal: 8,
  },
  toggleActive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ffffff',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 8,
  },
  menuScroll: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1f2937',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  bottomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  bottomIcon: {
    fontSize: 18,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  bottomLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6b7280',
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoutIcon: {
    fontSize: 18,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  logoutLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#dc2626',
  },
});
