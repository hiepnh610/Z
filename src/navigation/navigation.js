import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from 'src/constants/navigation';

const Stack = createStackNavigator();

const AppNavigation = ({auth}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {SCREENS.filter((router) => router.auth === auth.isSignedIn).map(
          (router) => {
            return (
              <Stack.Screen
                key={router.name}
                name={router.name}
                component={router.component}
                options={router.options}
              />
            );
          },
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const {auth} = state;

  return {auth};
};

export default connect(mapStateToProps)(AppNavigation);
