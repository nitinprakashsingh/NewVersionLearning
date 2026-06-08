import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

export type RootStackParamList = {
  Login: undefined;
  Otp: {
    mobileNumber: string;
  };
  AppDrawer: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Details: {
    message?: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f7f8fa',
        },
        headerTintColor: '#111827',
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: '#ffffff',
        },
        drawerType: 'slide',
        drawerStyle: {
          width: '85%',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f7f8fa',
          },
          headerTintColor: '#111827',
          headerTitleStyle: {
            fontWeight: '600',
          },
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={OtpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppDrawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
