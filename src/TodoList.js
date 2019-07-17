import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.remTodo = this.remTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
		this.completeTodo = this.completeTodo.bind(this);
	}
	addTodo (item) {
		this.setState((currState) => ({ todos: [ ...currState.todos, item ] }));
	}
	remTodo (id) {
		this.setState((currState) => ({
			todos: currState.todos.filter((item) => item.id !== id)
		}));
	}
	editTodo (id, message, date) {
		let updatedArray = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: message, date: date };
			}
			return todo;
		});
		this.setState({ todos: updatedArray });
	}
	completeTodo (id) {
		let updatedArray = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		this.setState({ todos: updatedArray });
	}
	todosRender () {
		return this.state.todos.map((todoItem) => (
			<div
				className="col-12 col-sm-6 col-md-4 col-lg-3 TodoList-todos"
				key={todoItem.key}>
				<Todo
					key={todoItem.key}
					id={todoItem.key}
					task={todoItem.task}
					date={todoItem.date}
					isCompleted={todoItem.isCompleted}
					completeTodo={this.completeTodo}
					updateTodo={this.editTodo}
					remove={this.remTodo}
				/>
			</div>
		));
	}
	render () {
		return (
			<div className="container my-5 pt-3 TodoList">
				<div className="row">
					<div className="col">
						<h1>Increase Productivity...</h1>
						<h5>By keeping track of todos</h5>
						<div className="col-12 col-sm-8 col-md-4 mx-auto">
							<NewTodoForm addTodo={this.addTodo} />
						</div>
					</div>
				</div>
				<div className="row my-5">{this.todosRender()}</div>
			</div>
		);
	}
}

export default TodoList;
