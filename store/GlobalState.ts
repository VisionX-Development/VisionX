import { createStore, action } from "easy-peasy";
import { Action } from "easy-peasy";
import { createTypedHooks } from "easy-peasy";

interface GlobalStateModel {
  cookieConsent: boolean;
  showCookieBanner: boolean;
  setCookieConsent: Action<GlobalStateModel, boolean>;
  setCookieBanner: Action<GlobalStateModel, boolean>;
}

const GlobalState = createStore<GlobalStateModel>({
  cookieConsent: false,
  showCookieBanner: false,
  setCookieConsent: action((state, payload: boolean) => {
    state.cookieConsent = payload;
  }),
  setCookieBanner: action((state, payload: boolean) => {
    state.showCookieBanner = payload;
  }),
});

export default GlobalState;

const typedHooks = createTypedHooks<GlobalStateModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
