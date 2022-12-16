import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "./sagas/rootSaga";
import CounterReducer from './ducks/counter';
import UserReducer from './ducks/user';

const reducer = combineReducers({
    counter: CounterReducer,
    user: UserReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;