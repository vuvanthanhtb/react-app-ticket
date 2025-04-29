const injectReducer = (store, key, reducer) => {
  store.reducerManager.add(key, reducer)
  store.replaceReducer(store.reducerManager.reduce);
}

export default injectReducer;
