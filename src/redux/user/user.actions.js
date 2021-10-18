import userActionTypes from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const setSignInState = (signInState) => ({
  type: userActionTypes.SET_SIGN_IN,
  payload: signInState,
});

export const setSignUpState = (signUpState) => ({
  type: userActionTypes.SET_SIGN_UP,
  payload: signUpState,
});

export const setTokenState = (tokenState) => ({
  type: userActionTypes.SET_TOKEN_STATE,
  payload: tokenState,
});
