import { globalState } from "./globalState";

export const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
