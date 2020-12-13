import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native-elements';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
// import Countries from "./screens/country"
import Api from "./components/api2"

// import { createStackNavigator } from '@react-navigation/stack';

// // const Stack = createStackNavigator();

// const myOptions = {
//   title:"My Home",
//   headerTintColor:"white",
//   headerStyle:{
//     backgroundColor:"#006aff"
//   }
// }


// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Feed} options={myOptions} />
//       {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
//     </Stack.Navigator>
//   );
// }

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00FFFF' }}>
      {/* <Text>Home Screen</Text> */}
      <Button  type="outline" title="Open" onPress={() => navigation.openDrawer()} />
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Feed} />
      <Drawer.Screen name="Regions" component={Api} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}