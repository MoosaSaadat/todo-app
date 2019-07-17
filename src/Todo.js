import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isEditing: false,
			updatedTask: this.props.task,
			updatedDate: this.props.date
		};
		this.handleComplete = this.handleComplete.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleRemove (evt) {
		this.props.remove(this.props.id);
	}
	handleChange (evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleUpdate (evt) {
		this.setState({ isEditing: false });
		this.props.updateTodo(
			this.props.id,
			this.state.updatedTask,
			this.state.updatedDate
		);
	}
	handleEdit (evt) {
		this.setState({ isEditing: true });
	}
	handleComplete (evt) {
		this.props.completeTodo(this.props.id);
	}
	render () {
		let result;
		if (!this.state.isEditing) {
			result = (
				<div className="card-body">
					<h5 onClick={this.handleComplete} className="card-title">
						{this.props.task}
					</h5>
					<h6
						onClick={this.handleComplete}
						className="card-subtitle mb-2 text-muted">
						{this.props.date}
					</h6>
					<button className="btn btn-outline-info" onClick={this.handleEdit}>
						Edit
					</button>
					<button
						className="btn btn-outline-danger mx-2"
						onClick={this.handleRemove}>
						Remove
					</button>
				</div>
			);
		}
		else {
			result = (
				<div className="card-body">
					<input
						type="text"
						name="updatedTask"
						className="form-control my-1"
						value={this.state.updatedTask}
						onChange={this.handleChange}
					/>
					<input
						type="date"
						name="updatedDate"
						className="form-control my-1 mb-2"
						value={this.state.updatedDate}
						onChange={this.handleChange}
					/>
					<button className="btn btn-outline-info" onClick={this.handleUpdate}>
						Update
					</button>
					<button
						className="btn btn-outline-danger mx-2"
						onClick={this.handleRemove}>
						Remove
					</button>
				</div>
			);
		}
		return (
			<div
				className={
					this.props.isCompleted ? "card mb-4 Todo-Completed" : "card mb-4"
				}>
				{result}
			</div>
		);
	}
}

export default Todo;
