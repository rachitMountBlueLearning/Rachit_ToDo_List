import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export function DataProvider (props) {
    let [toDoTasks, setToDoTasks] = useState([]);

    return (
        <DataContext.Provider value={{toDoTasks, setToDoTasks}}>
            {props.children}
        </DataContext.Provider>
    );
}