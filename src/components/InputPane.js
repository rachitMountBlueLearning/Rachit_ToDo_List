import React, {useState, useContext} from 'react';
import { DataContext } from '../contexts/DataContext';

function InputPane() {

    let [inputTitle, setInputTitle] = useState('');
    let {toDoTasks, setToDoTasks} = useContext(DataContext);

    function handleAddClick() {
        if(inputTitle === '') {
            alert('Please provide a title to the task');
        } else {
            
            const NEW_TASK = {
                title: inputTitle,
                index: toDoTasks.length,
                completed: false,
                toEdit: false
            };
            toDoTasks.push(NEW_TASK);
            setInputTitle('');
            setToDoTasks(toDoTasks);
        }
    }

    function handleCancelClick() {
        setInputTitle('');
    }

    return (
        <tr id='input-pane'>
            <td>New Task</td>
            <td>
                <input
                    id='input-field'
                    type="text"
                    placeholder='Title (Mandatory)'
                    value={inputTitle}
                    onChange={(event) => setInputTitle(event.target.value)}
                />
            </td>
            <td><button id='add-button' onClick={handleAddClick}>Add</button></td>
            <td><button id='cancel-button' onClick={handleCancelClick}>Cancel</button></td>
        </tr>
    )
}

export default InputPane;