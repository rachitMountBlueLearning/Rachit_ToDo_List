import React from "react";

class ToDoPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toEdit: false,
            task: this.props.displayTask
        }
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.reflectEditClick = this.reflectEditClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reflectStatusClick = this.reflectStatusClick.bind(this);
    }

    updateTask() {
        if(this.state.task.title === '') {
            alert('Enter Task Title')
        } else {
            const NEW_TASK = this.state.task;
            this.setState((state) => {
                return {
                    toEdit: false,
                    task: state.task
                }
            });
            this.props.onEdit(NEW_TASK);
        }
    }

    deleteTask() {
        this.props.onDelete(this.props.displayTask)
    }

    reflectEditClick() {
        this.setState((state) => {
            return {
                toEdit: true,
                task: state.task
            }
        })
    }

    handleChange(event) {
        let newTask = this.state.task;
        newTask.title = event.target.value;
        this.setState((state) => {
            return {
                toEdit: state.toEdit,
                task: newTask
            }
        })
    }

    reflectStatusClick() {
        const NEW_TASK = this.state.task;
        NEW_TASK.completed = !(NEW_TASK.completed);
        this.setState((state) => {
            return {
                toEdit: state.toEdit,
                task: NEW_TASK
            }
        })
        this.props.onEdit(NEW_TASK);
    }

    render() {
        const EDIT_BUTTON = <button
            id='edit-button'
            onClick={this.reflectEditClick}
        >
            Edit
        </button>

        const UPDATE_BUTTON = <button
            id='update-button'
            onClick={this.updateTask}
        >
            Update
        </button>

        const STATUS_BUTTON = <button
        id='status-button'
        onClick={this.reflectStatusClick}
    >
            {this.props.displayTask.completed ? 'Done' : 'Pending'}
        </button>

        const TITLE_FIELD = this.state.toEdit ?
            <input 
                id='input-field'
                type='text'
                placeholder='Title (Mandatory)'
                value={this.state.task.title}
                onChange={this.handleChange}
            /> :
            this.props.displayTask.title;

        return (
            <tr id='input-pane'>
                <td>{STATUS_BUTTON}</td>
                <td>{TITLE_FIELD}</td>
                <td>{this.state.toEdit ? UPDATE_BUTTON : EDIT_BUTTON}</td>
                <td><button id='delete-button' type="button" onClick={this.deleteTask}>Delete</button></td>
            </tr>
        )
    }
}

export default ToDoPane;