// import userActionTypes from "./siteNav.types";

const INITIAL_STATE = {
  // displayNewJournal: false,
  // signInState: false,
  // signUpState: false,
};

const siteNavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case userActionTypes.DISP_NEW_JOURNAL:
    //   return {
    //     ...state,
    //     displayNewJournal: action.payload,
    //     error: null,
    //   };

    // case userActionTypes.SET_SIGN_IN:
    //   return {
    //     ...state,
    //     signInState: action.payload,
    //     error: null,
    //   };

    // case userActionTypes.SET_SIGN_UP:
    //   return {
    //     ...state,
    //     signUpState: action.payload,
    //     error: null,
    //   };

    default:
      return state;
  }
};

export default siteNavReducer;
