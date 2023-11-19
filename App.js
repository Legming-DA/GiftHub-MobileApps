import * as React from 'react';
import { Calendars, Home, Notifications, Profile, Wallets } from './src/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home2, User, Wallet } from 'iconsax-react-native';
import { colors } from './src/theme'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Bottom = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.pink(), 
      tabBarStyle: {
        paddingBottom: 10,
        paddingTop: 10,
        height: 60,
        borderRadius: 50,
        marginHorizontal: 16,
        marginBottom: 4,
        elevation:1,
      },
    }}>
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ focused, color }) => (<Home2 color={color} variant={focused ? 'Bold' : 'TwoTone'} size={25} />) }} name='Home' component={Home} />
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Wallet', tabBarIcon: ({ focused, color }) => (<Wallet color={color} variant={focused ? 'Bold' : 'TwoTone'} size={25} />) }} name='Wallets' component={Wallets} />
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Profile', tabBarIcon: ({ focused, color }) => (<User color={color} variant={focused ? 'Bold' : 'TwoTone'} size={25} />) }} name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Bottom' component={Bottom} />
        <Stack.Screen options={{ headerShown: false }} name='Notifications' component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}