import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import Item from './Item';
import '../styles/listItem.css';

let ListItem = () => {
    let { todos } = useContext(AppContext);

    let renderTodo = () => {
        return todos.map((todo) => {
            return <Item key={todo.id} todo={todo}></Item>;
        });
    };
    return <ul className="container">{renderTodo()}</ul>;
};

export default ListItem;
