import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';

class App extends Component {

  constructor(props){
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddClick(){

    let item  = {text: "hello world: "+this.props.todoList.length+"#"};
    this.props.onAddClick(item);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.onAddClick}>hello</button>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p>{JSON.stringify(this.props)}</p>

            Learn React:
          </a>
        </header>
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


const addToDoAction = function(item){
  return ({
    type: "ADD_TODO",
    payload: item
  });
}
