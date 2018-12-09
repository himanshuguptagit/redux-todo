import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addToDoAction, addTodoTextChangeAction} from '../../actions/todoActions';

import AddTodoInput from '../presentational/addTodoInput';

class AddTodo extends Component{

  constructor(props){
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onAddClick(text){
    let item  = {text: text, finished: false, id: this.props.todoAdd.curId};
    this.props.onAddClick(item);
  }

  onTextChange(text){
    this.props.onTextChange(text);
  }

  render(){
    return(
      <div>
        <AddTodoInput curId={this.props.todoAdd.curId} text={this.props.todoAdd.text} onTextChange={this.onTextChange} onAddClick={this.onAddClick} />
      </div>
    );
  }

}

const mapStateToProps = function(state){
  return state.TodoApp;
}

const mapDispatchToProps = function(dispatch){
  return {
    onAddClick: function(text){
      dispatch(addToDoAction(text));
    },
    onTextChange:function(text){
      dispatch(addTodoTextChangeAction(text));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
