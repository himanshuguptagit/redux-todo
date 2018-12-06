import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';



const todoReducer = function(state={todoList: []},action){
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      // let l = state.todolist;
      // l.push(action.payload.text);
      // return {...state,
      //   todolist: l
      // }
      return {...state, todoList:  [...state.todoList,action.payload] };
    default:
      return state;
  }
}

let store = createStore(todoReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
