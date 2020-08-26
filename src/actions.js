import { LOAD_NAME_ACTION, LOAD_MESSAGE_ACTION } from './actionTypes';

export const loadName = (name) => {
  type: 'LOAD_NAME_ACTION',
  name
}

export const loadMessage = (message) => {
  type: 'LOAD_MESSAGE_ACTION',
  message
}
