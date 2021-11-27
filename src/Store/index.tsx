import { getTodos, setTodos } from './actions'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState:any = {};

const middleware:any = [thunk];



export const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware)));