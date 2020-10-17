import Login from 'src/scenes/login';
import Dashboard from 'src/scenes/dashboard';

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
      headerShown: false,
    },
    auth: true,
  },
];
