import { action } from "easy-peasy";
import { Action } from "easy-peasy";

export interface UserStateModel {
  userName: string;
  setName: Action<UserStateModel, string>;
  userEmail: string;
  setEmail: Action<UserStateModel, string>;
  userRole: string;
  setRole: Action<UserStateModel, string>;
}

const UserStore = <UserStateModel>{
  userName: "",
  setName: action((state, payload: string) => {
    state.userName = payload;
  }),
  userEmail: "",
  setEmail: action((state, payload: string) => {
    state.userEmail = payload;
  }),
  userRole: "",
  setRole: action((state, payload: string) => {
    state.userRole = payload;
  }),
};

export default UserStore;
