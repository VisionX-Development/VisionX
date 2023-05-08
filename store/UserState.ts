import { action } from "easy-peasy";
import { Action } from "easy-peasy";

export interface UserStateModel {
  isLoggedIn: boolean;
  setIsLoggedIn: Action<UserStateModel, boolean>;
  userName?: string;
  setName: Action<UserStateModel, string>;
  userRole?: string;
  setRole: Action<UserStateModel, string>;
}

const UserStore = <UserStateModel>{
  isLoggedIn: false,
  setIsLoggedIn: action((state, payload: boolean) => {
    state.isLoggedIn = payload;
  }),
  setName: action((state, payload: string) => {
    state.userName = payload;
  }),
  setRole: action((state, payload: string) => {
    state.userRole = payload;
  }),
};

export default UserStore;
