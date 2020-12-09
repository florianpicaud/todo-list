import React from 'react';
import "./todo.css";
import { Todo } from './todo.model';

type TodoProps = {
    todo: Todo;
    index: number;
    handleDeleteTodo: (id: number) => void;
}

export default class TodoComponent extends React.Component<TodoProps> {

    render(){
        return (
            <div key={this.props.todo.id} className="todo">
              <span className="todo-text">
                {this.props.index + 1}. {this.props.todo.text}
              </span>
              <span onClick={() => this.props.handleDeleteTodo(this.props.todo.id)} className="todo-delete">
                x
              </span>
            </div>
          );
    }
}