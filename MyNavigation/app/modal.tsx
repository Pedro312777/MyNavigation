import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppContacts from '../src/pages/AppContacts/';
import Contacts from '../src/pages/contacts/';
import Information from '../src/pages/contacts/Information/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="AppContacts" component={AppContacts}/>
      <Tab.Screen name="Contacts" component={Contacts}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AppContacts" 
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Information" 
        component={Information} 
      />
    </Stack.Navigator>
  );
}
