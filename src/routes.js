import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Meter from './pages/Meter';
import Emotions from './pages/Emotions';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Emotions"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="Emotions"
          component={Emotions}
          options={{
            title: 'How are you feeling',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Meter"
          component={Meter}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
