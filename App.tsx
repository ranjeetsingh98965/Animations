import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import TSR from './pages/TSR';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Animations Menu', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="TSR"
          component={TSR}
          // options={{
          //   headerTitle: 'Translation, Scaling & Rotation',
          //   headerTitleAlign: 'center',
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
