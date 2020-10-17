import authState from './states';
import ACTIONS from './actions';

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case ACTIONS.SET_SIGNED_IN:
      return {
        ...state,
        isSignedIn: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
