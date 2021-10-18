import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signInState: false,
  signUpState: false,
  tokenState: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case userActionTypes.SET_SIGN_IN:
      return {
        ...state,
        signInState: action.payload,
        error: null,
      };

    case userActionTypes.SET_SIGN_UP:
      return {
        ...state,
        signUpState: action.payload,
        error: null,
      };

    case userActionTypes.SET_TOKEN_STATE:
      return {
        ...state,
        tokenState: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
