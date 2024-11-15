import {useState} from "react";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";


function fetchTodos() {
    const result = [];
    for (let i = 0; i<localStorage.length ; i++) {
        const value = localStorage.key(i);
        result.push(value);
    }

    return result;
}

function App() {
    const [todos, setTodos] = useState(fetchTodos());

    const addTodo = (todo) => {
        console.log('clicked');
        localStorage.setItem(todo, todo);

        setTodos((currentTodos) => {
            return [...currentTodos, todo];
        })
    }

    const removeTodo = (todo) => {
        const result = todos.filter(todoItem => todoItem !== todo)
        setTodos(result);
        localStorage.removeItem(todo);
    }

    return (
        <div>
            <TodoHeader />
            <TodoInput onTodoAdd={addTodo} />
            <TodoList todos={todos} onTodoRemove={removeTodo} />
        </div>
    )
}

export default App
