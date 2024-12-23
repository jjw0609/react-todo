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

function TodoList({todos, onTodoRemove}) {

    return (
        <div>
            <ul>
                {
                    // eslint-disable-next-line react/prop-types
                    todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => onTodoRemove(todo)}>remove</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;