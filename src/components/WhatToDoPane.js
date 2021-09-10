import React from "react";

class ToDoPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toEdit: false,
            inputTaskTitle: this.props.displayTask.title,
            task: this.props.displayTask
        }
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    updateTask() {
        if(this.props.inputTaskTitle === '') {
            alert('Enter Task Title')
        } else {
            const NEW_TASK = {
                index: this.state.task.index,
                title: this.state.task.title,
                completed: this.state.task.completed
            }
            this.setState({
                toEdit: false,
                inputTaskTitle: '',
                task: this.state.task
            });
            this.props.onEdit(NEW_TASK);
        }
    }

    deleteTask() {
        this.props.onDelete(this.props.displayTask)
    }

    render() {
        const EDIT_BUTTON = <button
            id='edit-button'
            onClick={
                this.setState((props) => {
                    return {
                        toEdit: true,
                        inputTaskTitle: this.props.displayTask.title,
                        task: this.props.displayTask
                    }
                })
            }
        >
            Edit
        </button>

        const UPDATE_BUTTON = <button
            id='edit-button'
            onClick={this.updateTask}
        >
            Update
        </button>

        return (
            <tr id='input-pane'>
                <td>{this.state.task.completed ? 'Done' : 'Pending'}</td>
                <td>
                    {
                        this.state.toEdit ?
                            <input
                                id='input-field'
                                type="text"
                                placeholder='Title (Mandatory)'
                                value={this.state.inputTaskTitle}
                                onChange={(event) => {
                                    this.setState((state) => {
                                        return {
                                            toEdit: state.toEdit,
                                            inputTaskTitle: event.target.value,
                                            task: this.state.task
                                        }
                                    })
                                }
                                }
                            /> :
                            this.props.displayTask.title
                    }
                </td>
                <td>
                    {this.state.toEdit ? UPDATE_BUTTON : EDIT_BUTTON}
                </td>
                <td>
                    <input id='delete-button' type="button" onClick={this.deleteTask} />
                </td>
            </tr>
        )
    }
}

export default ToDoPane;