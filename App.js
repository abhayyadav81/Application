import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyDetailScreen from './src/screens/MyDetailScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashboardScreen" component={Drawers} />
        <Stack.Screen name="MyDetailScreen" component={MyDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function Drawers() {
  return (
    <>
      <Drawer.Navigator useLegacyImplementation initialRouteName="DashboardScreen" drawerPosition='left'>
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen} options={{drawerIcon: ({focused, size}) => (
             <Ionicons name="arrow-forward-circle" size={30} color="#0041C2" />
           ),}}/>
        {/* <Drawer.Screen name="ThirdScreen" component={ThirdScreen} /> */}
      </Drawer.Navigator>
    </>
  );
}
export default App

