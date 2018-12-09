
import { combineReducers } from 'redux';
import TodoListReducer from './todoReducer';


const RootReducer = combineReducers({
   TodoApp: TodoListReducer
 });

 export default RootReducer;
