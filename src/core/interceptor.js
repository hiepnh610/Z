import axios from 'axios';

import ROOT_ACTIONS from 'src/store/actions';

const httpInterceptor = (store) => {
  axios.defaults.baseURL = 'http://localhost:3000';
  axios.defaults.headers.common.device = 'Mobile';

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        store.dispatch({
          type: ROOT_ACTIONS.AUTH_ACTIONS.SET_TOKEN,
          payload: '',
        });

        store.dispatch({
          type: ROOT_ACTIONS.AUTH_ACTIONS.SET_SIGNED_IN,
          payload: false,
        });
      }

      return Promise.reject(error);
    },
  );
};

export default httpInterceptor;
