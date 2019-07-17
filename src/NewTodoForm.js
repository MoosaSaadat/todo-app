import React, {Component} from 'react';
import './NewTodoForm.css';

class NewTodoForm extends Component {
     constructor (props) {
          super(props);
          this.keyCounter = 0;
          this.state = {
               task: "",
               date: ""
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange (evt) {
          this.setState({
               [evt.target.name]: evt.target.value
          })
     }
     handleSubmit (evt) {
          evt.preventDefault();
          const newTodo = {...this.state,
                              key: this.keyCounter,
                              id: this.keyCounter,
                              isCompleted: false}
          this.props.addTodo(newTodo);
          this.setState({
               task: "",
               date: ""
          });
          this.keyCounter++;
     }
     render() {
          return (
               <form className="NewTodoForm"
                    onSubmit={this.handleSubmit}>
                    <div className="NewTodoForm-input form-group">
                         <label htmlFor="task">Task:</label>
                         <input type="text"
                              id="task"
                              className="form-control"
                              name="task"
                              placeholder="Ex: Create React App..."
                              value={this.state.task}
                              onChange={this.handleChange} />
                    </div>
                    <div className="NewTodoForm-input form-group">
                         <label htmlFor="date">Date:</label>
                         <input type="date"
                              id="date"
                              className="form-control"
                              name="date"
                              value={this.state.date}
                              onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary my-auto">ADD ToDo!</button>
               </form>
          );
     }
}

export default NewTodoForm;
