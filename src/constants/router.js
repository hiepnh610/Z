import Login from 'src/scenes/login';
import Dashboard from 'src/scenes/dashboard';

export const ROUTERS = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },

  {
    name: 'Dashboard',
    component: Dashboard,
    options: {
      headerShown: false,
    },
  },
];
