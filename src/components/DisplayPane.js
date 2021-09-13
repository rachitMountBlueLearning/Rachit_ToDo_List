import React, {useContext} from 'react';
import { DataContext } from '../contexts/DataContext';

function DisplayPane() {
    let {toDoTasks, setToDoTasks} = useContext(DataContext);

    function handleEditClick() {
        toDoTasks[this.props.task.index].toEdit = true;
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
        <tr id='display-pane'>
            <td><button id='status-button' onClick={handleStatusClick}>{this.props.task.completed ? 'Done' : 'Pending'}</button></td>
            <td>{this.props.task.title}</td>
            <td><button id='edit-button' onClick={handleEditClick}>Edit</button></td>
            <td><button id='delete-button' type="button" onClick={handleDeleteClick}>Delete</button></td>
        </tr>
    );
}

export default DisplayPane;