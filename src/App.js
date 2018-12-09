import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

import {addToDoAction, removeToDoAction, toggleToDoAction} from './actions/todoActions';

import TodoList from './components/containers/TodoList';
import AddTodo from './components/containers/AddTodo';


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
          <AddTodo />
          <TodoList />
          <button onClick={this.onAddClick}>add</button>
          App
          <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return state;
}

const mapDispatchToProps = function(dispatch){
  return{
    onAddClick: function(item){
      dispatch(addToDoAction(item));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
