import ERROR_STATE from './states';
import ERROR_ACTIONS from './actions';

const ERROR_REDUCER = (state = ERROR_STATE, action) => {
  switch (action.type) {
    case ERROR_ACTIONS.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default ERROR_REDUCER;
