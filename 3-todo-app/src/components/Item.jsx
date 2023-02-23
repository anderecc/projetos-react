import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import '../styles/item.css';

const Item = ({ todo }) => {
    let { handleDeletTodo, todos, setTodoEdit } = useContext(AppContext);

    return (
        <li key={todo.id} className={'item'} id={todo.id}>
            {todo.title}
            <div className="button-container">
                <button
                    className="button button-edit"
                    onClick={() => setTodoEdit(todo)}
                >
                    Editar
                </button>

                <button
                    className="button button-delet"
                    onClick={(e) => {
                        let newTodos = todos.filter(
                            (todo) =>
                                todo.id !== +e.target.parentNode.parentNode.id
                        );
                        newTodos.map((todo, index) => (todo.id = index + 1));
                        localStorage.setItem('todos', JSON.stringify(newTodos));
                        handleDeletTodo(newTodos);
                    }}
                >
                    Excluir
                </button>
            </div>
        </li>
    );
};

export default Item;
