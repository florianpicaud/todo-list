import React from 'react';
import { Todo } from '../Todo/todo.model';
import TitleComponent from '../Title/title.component';
import FormComponent from '../Form/form.component';
import TodoComponent from '../Todo/todo.component';
import './todo-list.css';

type TodoListState = {
    name: string;
    inputValue: string;
    todos: Todo[];
}

export default class TodoListComponent extends React.Component<{}, TodoListState> {

    state: TodoListState = {
        name: "Flo",
        inputValue: "",
        todos: []
    }

    handleSubmit(): void {
        if (this.state.inputValue === "") 
            return;

        let newTodo: Todo = { id: Date.now(), text: this.state.inputValue };
        this.setState((state) => ({
            todos: [...state.todos, newTodo],
            inputValue: "",
        }));
    }

    handleDeleteTodo(id: number): void {
        const newTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState((state) =>({
            todos: newTodos,
        }));
    }

    setInputValue(value: string): void {
        this.setState((state) => ({
            inputValue: value,
        }));
    }

    render(){
        return (
            <div className="todolist">
              <TitleComponent name={this.state.name} />
              <FormComponent
                inputValue={this.state.inputValue}
                setInputValue={this.setInputValue.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
              />
              {this.state.todos.map((todo, index) => (
                <TodoComponent todo={todo} index={index} handleDeleteTodo={this.handleDeleteTodo.bind(this)} />
              ))}
            </div>
          );
    }
  }