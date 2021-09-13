import React, {useContext} from 'react';
import { DataContext } from '../contexts/DataContext';
import DisplayPane from './DisplayPane';
import InputPane from './InputPane';
import EditPane from './EditPane';


function ToDoList() {
    let {toDoTasks} = useContext(DataContext);

    return (
        <div id='todo-list-container'>
            <h1 id='todo-title'>To-Do List</h1>
            <table id='todo-list'>
                <thead>
                    <tr id='todo-list-header'>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Add/Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDoTasks.map(toDoTask => {
                            console.log(toDoTasks);
                            return toDoTask.toEdit ?
                                <EditPane task={toDoTask} /> :
                                <DisplayPane task={toDoTask} />
                        })
                    }
                    <InputPane />
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;