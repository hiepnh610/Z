import AUTH_STATE from './states';
import AUTH_ACTIONS from './actions';

const AUTH_REDUCER = (state = AUTH_STATE, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case AUTH_ACTIONS.SET_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload,
      };

    default:
      return state;
  }
};

export default AUTH_REDUCER;
