
import {ADD_TODO, REM_TODO, TOGGLE_TODO, ADD_TODO_TEXT_CHANGE} from './actionTypes';


export const addToDoAction = function(item){
  return ({
    type: ADD_TODO,
    payload: item
  });
}


export const removeToDoAction = function(id){
  return({
    type: REM_TODO,
    payload: id
  });
}

export const toggleToDoAction = function(id){
  return({
    type: TOGGLE_TODO,
    payload: id
  });
}


export const addTodoTextChangeAction = function(text){
  return({
    type: ADD_TODO_TEXT_CHANGE,
    payload: text
  });
}
