import {useState} from "react";

function fetchTodos() {
    const result = [];
    for (let i = 0; i<localStorage.length ; i++) {
        const value = localStorage.key(i);
        result.push(value);
    }
x
    return result;
}

function TodoList({todos}) {

    const handleRemove = (todo) => {
        // todos.splice(index, 1);
        const result = todos.filter(todoItem => todoItem !== todo)
        setTodos(result);
        localStorage.removeItem(todo);
    }

    return (
        <div>
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => handleRemove(todo, index)}>remove</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;