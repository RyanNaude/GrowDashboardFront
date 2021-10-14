import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import siteNavReducer from "./siteNav/siteNav.reducer";

export default combineReducers({
  user: userReducer,
  siteNav: siteNavReducer,
});
