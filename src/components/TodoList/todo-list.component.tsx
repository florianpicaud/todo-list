import React from 'react';
import { Todo } from '../Todo/todo.model';
import TitleComponent from '../Title/title.component';
import FormComponent from '../Form/form.component';
import TodoComponent from '../Todo/todo.component';
import './todo-list.css';

export type TodoListState = {
    name: string;
    inputValue: string;
    todos: Todo[];
    scrolled: boolean;
}

export default class TodoListComponent extends React.Component<{}, TodoListState> {

    state: TodoListState = {
        name: "Flo",
        inputValue: "",
        todos: [],
        scrolled: false
    }
    private scrollableZoneRef: React.RefObject<HTMLDivElement> = React.createRef();

    handleScroll(): void{
        let scrolled: boolean  = this.scrollableZoneRef.current?.scrollTop ? this.scrollableZoneRef.current.scrollTop > 0: false ;
        this.setState((state) => ({
            scrolled : scrolled
        }));
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
            <div className="d-flex flex-column todolist">
                <div className={"d-flex flex-column header".concat(this.state.scrolled ? " scroll" : "")}>
                    <TitleComponent name={this.state.name} />
                    <FormComponent
                        inputValue={this.state.inputValue}
                        setInputValue={this.setInputValue.bind(this)}
                        handleSubmit={this.handleSubmit.bind(this)}
                    />
                </div>
                <div className="d-flex content" onScroll={this.handleScroll.bind(this)} ref={this.scrollableZoneRef}>
                    <div className="d-flex flex-column todo-container">
                        {this.state.todos.map((todo, index) => (
                                <TodoComponent todo={todo} key={todo.id} index={index} handleDeleteTodo={this.handleDeleteTodo.bind(this)} />
                        ))}
                    </div>
                </div>
            </div>
          );
    }
  }