import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from '../screens/HomeStack';
import ExchangesScreen from '../screens/ExchangesScreen';
import SearchScreen from '../screens/SearchScreen';
import TagsScreen from '../screens/TagsScreen';

const Stack = createNativeStackNavigator();

const ProfileHome = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="ExchangesScreen" component={ExchangesScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="TagsScreen" component={TagsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileHome;
