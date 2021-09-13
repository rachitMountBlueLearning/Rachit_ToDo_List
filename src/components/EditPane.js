import React, {useState, useContext} from 'react';
import { DataContext } from '../contexts/DataContext';

function EditPane() {
    let {toDoTasks, setToDoTasks} = useContext(DataContext);
    let [inputTitle, setInputTitle] = useState(toDoTasks[this.props.task.index].title);

    function handleUpdateClick(event) {
        toDoTasks[this.props.task.index].title = inputTitle;
        setToDoTasks(toDoTasks);
    }

    function handleDeleteClick() {
        toDoTasks = toDoTasks
            .filter(({index}) => index !== this.props.task.index)
            .map((task, index) => task.index = index);
        setToDoTasks(toDoTasks);
    }

    function handleStatusClick() {
        toDoTasks[this.props.task.index].completed = !toDoTasks[this.props.task.index].completed;
        setToDoTasks(toDoTasks);
    }

    return (
        <tr id='edit-pane'>
            <td><button id='status-button' onClick={handleStatusClick}>{this.props.task.completed ? 'Done' : 'Pending'}</button></td>
            <td>
                <input
                    id='input-field'
                    type="text"
                    placeholder='Title (Mandatory)'
                    value={inputTitle}
                    onChange={(event) => setInputTitle(event.target.value)}
                />
            </td>
            <td><button id='edit-button' onClick={handleUpdateClick}>Update</button></td>
            <td><button id='delete-button' type="button" onClick={handleDeleteClick}>Delete</button></td>
        </tr>
    )
}

export default EditPane;