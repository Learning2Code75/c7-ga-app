import { combineReducers } from "redux";
import events from "./events";
import paths from "./paths";
import users from "./users";
import auth from "./auth";
import chats from "./chats";
export default combineReducers({
  events,
  paths,
  users,
  auth,
  chats,
});
