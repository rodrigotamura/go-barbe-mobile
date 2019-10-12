import {createStore, compose, applyMiddleware} from 'redux';

export default (reducers, middlewares) => {
  // applying Reactotron
  const enhancer = __DEV__
    ? compose(
        console.tron.createEnhancer(), // integration REdux + Reactotron
        applyMiddleware(...middlewares),
      )
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
