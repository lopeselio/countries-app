import * as React from 'react';
import { Button, View } from 'react-native';
export function countriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
