import { combineReducers } from "@reduxjs/toolkit";

function createReducerManager(initialReducers) {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => reducers,

    reduce: (state, action) => {
      return combinedReducer(state, action);
    },

    add: (key, reducer) => {
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
  };
}

export default createReducerManager;
