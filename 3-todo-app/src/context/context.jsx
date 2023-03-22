import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

const TodoProvider = ({ children }) => {
    let [todos, setTodos] = useState([]);
    let [todoEdit, setTodoEdit] = useState();
    let [value, setValue] = useState('');

    useEffect(() => {
        getTodos();
    }, []);
    let getTodos = () => {
        let todos = JSON.parse(localStorage.getItem('todos')) ?? [
            { id: 1, title: 'Fazer comida', done: false },
            { id: 2, title: 'Ir para academia', done: false },
            { id: 3, title: 'Limpar a casa', done: false },
            { id: 4, title: 'Estudar pelo menos 3 horas', done: false },
        ];
        return setTodos(todos);
    };

    let handleDeletTodo = (todos) => {
        setTodos([...todos]);
        setValue('');
    };

    return (
        <AppContext.Provider
            value={{
                todos,
                handleDeletTodo,
                setTodoEdit,
                todoEdit,
                setTodos,
                value,
                setValue,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default TodoProvider;
