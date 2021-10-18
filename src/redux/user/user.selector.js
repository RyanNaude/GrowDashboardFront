import { createSelector } from "reselect";

const selectUser = (state) => state.user;
const selectSignIn = (state) => state.user;
const selectSignUp = (state) => state.user;
const selectToken = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSignInState = createSelector(
  [selectSignIn],
  (user) => user.signInState
);

export const selectSignUpState = createSelector(
  [selectSignUp],
  (user) => user.signUpState
);

export const selectTokenState = createSelector(
  [selectToken],
  (user) => user.tokenState
);
