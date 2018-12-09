import React, { Component } from 'react';
import {connect} from 'react-redux';

import List from '@material-ui/core/List';
import TodoListItem from '../presentational/todoListItem';
import {removeToDoAction, toggleToDoAction} from '../../actions/todoActions';

class TodoList extends Component{

  constructor(props){
    super(props);

    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
  };


  onRemoveClick(id){
    this.props.onRemoveClick(id);
  }

  onToggleClick(id){
    console.log(id);
    this.props.onToggleClick(id);
  }

  render(){
    console.log(this.props);
    let items = this.props.todoList.map(item => {
       return(<TodoListItem item={item} onToggleClick={this.onToggleClick} onRemoveClick={this.onRemoveClick} key={item.id}/>);
    });

    return(
      <div>
        <List>
          {items}
        </List>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return state.TodoApp;
}

const mapDispatchToProps = function(dispatch){
  return{
    onRemoveClick: function(id){
      dispatch(removeToDoAction(id));
    },
    onToggleClick: function(id){
      dispatch(toggleToDoAction(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
