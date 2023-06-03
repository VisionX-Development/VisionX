import { createStore, action } from "easy-peasy";
import { Action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";
import UserStore from "./UserState";
import { UserStateModel } from "./UserState";

interface GlobalStateModel {
  // User State
  user: UserStateModel;

  // Alert Banner
  alert: { message: string; type: string };
  setAlert: Action<GlobalStateModel, { message: string; type: string }>;
}

const GlobalState = createStore<GlobalStateModel>({
  // User State
  user: UserStore,

  // Alert Banner
  alert: { message: "no alert", type: "none" },
  setAlert: action((state, payload: { message: string; type: string }) => {
    state.alert = payload;
  }),
});

export default GlobalState;

const typedHooks = createTypedHooks<GlobalStateModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
