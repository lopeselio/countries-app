import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { detailsScreen } from './detailsScreen';
import { countriesScreen } from './countriesScreen'
import Api from '../components/api2'

const Stack = createStackNavigator();

const myOptions = {
  title:"My Regions",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries" component={Api} options={myOptions} />
      <Stack.Screen name="Countries" component={countriesScreen} options={{...myOptions, title: "Countries"}} />
      <Stack.Screen name="Details" component={detailsScreen} options={{...myOptions,title:"Country Details"}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
