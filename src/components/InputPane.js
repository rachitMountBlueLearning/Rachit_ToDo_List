import React from "react";

class InputPane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTaskTitle: ''
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(event) {
        if(this.state.inputTaskTitle === '') {
            alert('Enter Task Title')
        } else {
            const NEW_TASK = {
                title: this.state.inputTaskTitle,
                completed: false
            }
            this.setState({
                inputTaskTitle: ''
            })
            this.props.onAdd(NEW_TASK);
        }
    }

    render() {
        return (
            <tr id='input-pane'>
                <td>New Task</td>
                <td>
                    <input
                        id='input-field'
                        type="text"
                        placeholder='Title (Mandatory)'
                        value={this.state.inputTaskTitle}
                        onChange={(event) => this.setState({inputTaskTitle: event.target.value})}
                    />
                </td>
                <td>
                    <button id='add-button' onClick={this.addTask}>
                        Add
                    </button>
                </td>
                <td />
            </tr>
        )
    }
}

export default InputPane;