import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SCREENS} from 'src/constants/navigation';
import STYLE_VARIABLES from 'src/styles/core/variables';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = ({auth}) => {
  return (
    <NavigationContainer>
      {auth.isSignedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: STYLE_VARIABLES.COLORS.PRIMARY_COLOR,
            inactiveTintColor: STYLE_VARIABLES.COLORS.DARK_COLOR,
          }}>
          {SCREENS.filter((route) => route.auth === true).map((route) => {
            return (
              <Tab.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options}
              />
            );
          })}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          {SCREENS.filter((route) => route.auth === false).map((route) => {
            return (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options}
              />
            );
          })}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  const {auth} = state;

  return {auth};
};

export default connect(mapStateToProps)(AppNavigation);
