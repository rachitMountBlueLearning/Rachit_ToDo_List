import './App.css';
import ToDoList from './components/ToDoList';
import { DataProvider } from './contexts/DataContext';

function App() {
    return (
        <DataProvider>
            <ToDoList />
        </DataProvider>
    )
}

export default App;