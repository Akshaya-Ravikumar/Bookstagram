import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from './reducer';
import AppComponent from './container/app';
import { loadName, loadMessage } from './actions';

const store = createStore(rootReducer);

const mapStateToProps = state => ({
    name: state.name,
    message: state.message,
});

const mapDispatchToProps = dispatch => {
  return ({
   loadName: name => dispatch(loadName(name)),
   loadMessage: message => dispatch(loadMessage(message))
});
}

const RenderComponent = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

const render = () => ReactDOM.render(<Provider store={store}><RenderComponent /></Provider>, document.getElementById('root'));

render();
