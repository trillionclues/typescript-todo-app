import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodoHandler = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { id: Math.random(), text: text }];
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: 'h-full text-center mt-16 w-full', children: [_jsx("h2", { className: 'mb-10 text-xl uppercase font-bold tracking-wider', children: "My Todo List!" }), _jsx("div", { className: 'flex flex-col md:w-1/2 w-96 mx-auto border border-gray-300 rounded-md', children: _jsxs("div", { children: [_jsx(NewTodo, { onAddHandler: addTodoHandler }), todos.length > 0 ? (_jsx(TodoList, { todos: todos })) : (_jsx("div", { className: 'p-5', children: _jsx("p", { className: 'text-gray-400 text-lg', children: "No todos found..." }) }))] }) }), _jsx(ToastContainer, {})] }) }));
};
export default App;
