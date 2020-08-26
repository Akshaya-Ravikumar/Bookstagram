import { LOAD_NAME_ACTION, LOAD_MESSAGE_ACTION } from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  name : '',
}

function nameReducer(state = initialState, {type, payload}) {
  switch(type) {
    case LOAD_NAME_ACTION:
      return Object.assign({}, state, {
        name: payload
      });
    default:
      return initialState;
  }
}

function messageReducer(state = { message : '' }, {type, payload}) {
  switch(type) {
    case LOAD_MESSAGE_ACTION:
      return Object.assign({}, state, {
        message: payload
      });
    default:
      return initialState;
  }
}

export const rootReducer = combineReducers({nameReducer, messageReducer});

export default rootReducer;
