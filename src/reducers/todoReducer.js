
import {ADD_TODO, REM_TODO, TOGGLE_TODO, ADD_TODO_TEXT_CHANGE} from '../actions/actionTypes';

const initialState = {todoList: []
                      ,todoAdd:{curId: 0,text: ""}
                    };

let TodoReducer = function(state = initialState,action){
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      let item = {id: state.todoAdd.curId, text: state.todoAdd.text, finished: false}
      return {...state, todoList:  [...state.todoList,item], todoAdd: {curId: state.todoAdd.curId+1, text:""} };
    case REM_TODO:
      return {...state,
        todoList: [
          ...state.todoList.filter(
            item => item.id !== action.payload
          )
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((item)=>{
            if(item.id === action.payload){
              item.finished = item.finished? false:true;
            }
            return item;
          })
        ]
      }
    case ADD_TODO_TEXT_CHANGE:
      return{
        ...state,
        todoAdd: {text: action.payload}
      }
    default:
      return state;
  }
}

export default TodoReducer;
