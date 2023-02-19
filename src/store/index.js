import { combineReducers, createStore } from "redux";
import { authSlice } from "./auth/authSlice";
import { todoSlice } from "./todos/todoSlice";

const rootReducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log("Render", store.getState());
// });
