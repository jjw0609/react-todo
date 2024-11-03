import {useState} from "react";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";


// function fetchTodos() {
//     const result = [];
//     for (let i = 0; i<localStorage.length ; i++) {
//         const value = localStorage.key(i);
//         result.push(value);
//     }
//
//     return result;
// }

function App() {

    // const handleInput = (event) => {
    //     console.log(event);
    //     const value = event.target.value;
    //     setInputText(value);
    // }

    // const handleClick = () => {
    //     console.log('clicked');
    //     localStorage.setItem(inputText, inputText);
    //
    //     setTodos((currentTodos) => {
    //         return [...currentTodos, inputText];
    //     })
    //     setInputText('');
    // }

    // const handleRemove = (todo, index) => {
    //     // todos.splice(index, 1);
    //     const result = todos.filter(todoItem => todoItem !== todo)
    //     setTodos(result);
    //     localStorage.removeItem(todo);
    // }

    return (
        <div>
            <TodoHeader />
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default App
