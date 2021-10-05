import { combineReducers } from "redux";
import countryReducer from "./country/reducer";

export const rootReducer = combineReducers({
  data: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
