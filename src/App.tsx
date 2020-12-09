import React from 'react';
import TodoListComponent from './components/TodoList/todo-list.component';
import './App.css';

export default class App extends React.Component {

  render(){
    return (
      <div className="app">
        <TodoListComponent />
      </div>
    );
  }
}
