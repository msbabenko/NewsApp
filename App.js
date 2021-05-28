/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/HomeScreen'
import {NewsScreen} from './src/NewsScreen'
import {ProfileScreen} from './src/ProfileScreen'
import { LogInScreen} from './src/AuthScreen'
import { getToken } from './src/Token';



const userTokenValue = getToken();

const Tabs = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

export const isAuth = () => (
  <ProfileStack.Navigator>
  {userTokenValue == null ? (
    // No token found, user isn't signed in
    <ProfileStack.Screen
      name="SignIn"
      component={LogInScreen}
    />
  ) : (
    // User is signed in
    <ProfileStack.Screen name="ProfileNested" component={ProfileScreen} />
  )}
</ProfileStack.Navigator>
);

function TabsBar() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="News" component={NewsScreen} />
      <Tabs.Screen name="Profile" component={isAuth} />
    </Tabs.Navigator>
  );
}


const App = () => {
 
  
  

  return (
  

    <NavigationContainer>
      <TabsBar />
      
    </NavigationContainer>

 
  );
};



export default App;
