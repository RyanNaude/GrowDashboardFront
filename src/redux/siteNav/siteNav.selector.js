import { createSelector } from "reselect";

const selectNewJournal = (state) => (state.siteNav);

// const selectUser = (state) => state.user;
// const selectSignIn = (state) => state.user;
// const selectSignUp = (state) => state.user;

export const selectDispNewJournal = createSelector(
  [selectNewJournal],
  (siteNav) => siteNav.displayNewJournal
);

// export const selectCurrentUser = createSelector(
//   [selectUser],
//   (user) => user.currentUser
// );

// export const selectSignInState = createSelector(
//   [selectSignIn],
//   (user) => user.signInState
// );

// export const selectSignUpState = createSelector(
//   [selectSignUp],
//   (user) => user.signUpState
// );
