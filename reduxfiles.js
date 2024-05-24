//store
import { applyMiddleware, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";


const middleware = [thunk]
const store = legacy_createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middleware))
)
export default store

//reducer

const count=5;
const reducer = (state=count, action) => {
    const{type, payload} = action;
    switch (type) {
        case 'INCREMENT':
            return state + payload
        case 'DECREMENT':
            return state - 1
        default:    
            return state
    }
}
export default reducer

//action


export const IncAction = (value) => async (dispatch) => {
    dispatch({
        type: 'INCREMENT',
        payload:value
    })
}
export const DecAction = () => async (dispatch) => {
    dispatch({
        type: 'DECREMENT'
    })
}

// app.js
import React from 'react';
import {connect} from 'react-redux'
import {IncAction, DecAction} from './actions'

function App({local_variable, IncAction, DecAction}) {
  return (
    <div className="App">
      <h2>{local_variable}</h2>
      <button onClick={() => IncAction(5)}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
    </div>
  );
}
  const mapStateToProps = (state) => ({
        local_variable: state
  })

export default connect(mapStateToProps, {IncAction, DecAction})(App);

