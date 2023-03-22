import React, { useEffect } from 'react';

import { useContext } from 'react';
import { AppContext } from '../context/context';
import '../styles/addTodo.css';

let AddTodo = () => {
    let { todos, todoEdit, setTodos, setTodoEdit, value, setValue } =
        useContext(AppContext);

    useEffect(() => {
        if (todoEdit) {
            setValue(todoEdit.title);
        }
    }, [setValue, todoEdit]);

    let handleSubmit = (e) => {
        e.preventDefault();

        if (!todoEdit) {
            if (value) {
                let newTodo = {
                    id: todos.length + 1,
                    title: value,
                    done: false,
                };
                setTodos([...todos, newTodo]);
                localStorage.setItem(
                    'todos',
                    JSON.stringify([...todos, newTodo])
                );
                setValue('');
            }
        } else {
            todos[+todoEdit.id - 1].title = value;
            let newsTodos = [...todos];
            setTodos([...newsTodos]);
            setTodoEdit();
            localStorage.setItem('todos', JSON.stringify(newsTodos));
            setValue('');
        }
    };

    let handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                className="input"
                type="text"
                placeholder="Insira sua nova Tarefa"
                onChange={handleChange}
                value={value}
            />
            <button className="button" onClick={handleSubmit}>
                ADICIONAR
            </button>
        </form>
    );
};

export default AddTodo;
