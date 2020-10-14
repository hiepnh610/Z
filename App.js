/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROUTERS} from './src/constants/router';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {ROUTERS.map((router) => {
          return (
            <Stack.Screen
              key={router.name}
              name={router.name}
              component={router.component}
              options={router.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
