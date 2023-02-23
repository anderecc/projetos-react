import React, { useEffect } from 'react';
import ListItem from './components/ListItem';
import AddTodo from './components/AddTodo';
import './styles/app.css';

const App = () => {
    useEffect(() => {
        document.title = 'Todo App';
    }, []);
    return (
        <>
            <h1 className="title">
                Lista de Tarefas com React com os Hooks 'useContext, useState'
            </h1>
            <div className="app">
                <ListItem></ListItem>
                <AddTodo></AddTodo>
            </div>
        </>
    );
};

export default App;
