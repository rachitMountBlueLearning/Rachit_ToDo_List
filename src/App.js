import './App.css';
import React from 'react';
import ToDoPane from './components/ToDoPane';
import InputPane from './components/InputPane';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.reflectAdd = this.reflectAdd.bind(this);
        this.reflectUpdate = this.reflectUpdate.bind(this);
        this.reflectDelete = this.reflectDelete.bind(this);
    }

    reflectAdd(newTask) {
        let newTasks = this.state.tasks;
        newTask['index'] = newTasks.length;
        newTasks.push(newTask);
        this.setState({tasks: newTasks});
    }

    reflectUpdate(newTask, taskIndex) {
        this.setState((state) => {
            return {
                tasks: state.tasks
                    .map((task, index) => {
                        if(index === taskIndex) {
                            task = newTask;
                        }
                        return task;
                    })
            }
        })
    }

    reflectDelete(deleteTask) {
        let newTasks = this.state.tasks
            .filter((task) => {
                return task.index !== deleteTask.index;
            })
            .map((task, index) => {
                task.index = index;
                return task;
            })
        this.setState((state) => {
            return {
                tasks: newTasks
            };
        })
    }

    render() {
        let displayList = this.state.tasks
            .map((task, index) => {
                return <ToDoPane 
                    displayTask={task}
                    onEdit={this.reflectUpdate}
                    onDelete={this.reflectDelete}
                    toEdit={false}
                    taskIndex={index}
                />
            })
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
                        {displayList === [] ? <br /> : displayList}
                        <InputPane onAdd={this.reflectAdd} />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;