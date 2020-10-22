import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from 'src/scenes/login';
import Dashboard from 'src/scenes/dashboard';
import Users from 'src/scenes/users';
import Gifts from 'src/scenes/gifts';
import Transactions from 'src/scenes/transactions';

export const SCREENS = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
    auth: false,
  },

  {
    name: 'Dashboard',
    component: Dashboard,
    options: {
      tabBarIcon: ({color, size}) => {
        return <Icon name="newspaper-o" size={size} color={color} />;
      },
    },
    auth: true,
  },

  {
    name: 'Users',
    component: Users,
    options: {
      tabBarIcon: ({color, size}) => {
        return <Icon name="user" size={size} color={color} />;
      },
    },
    auth: true,
  },

  {
    name: 'Gifts',
    component: Gifts,
    options: {
      tabBarIcon: ({color, size}) => {
        return <Icon name="gift" size={size} color={color} />;
      },
    },
    auth: true,
  },

  {
    name: 'Transactions',
    component: Transactions,
    options: {
      tabBarIcon: ({color, size}) => {
        return <Icon name="credit-card" size={size} color={color} />;
      },
    },
    auth: true,
  },
];
