import { jsx as _jsx } from "react/jsx-runtime";
const TodoList = (props) => {
    console.log(props.todos);
    return (_jsx("div", { className: 'flex flex-col justify-start items-start text-white p-3 text-base', children: _jsx("ul", { className: 'w-full flex flex-start p-2 flex flex-col justify-start items-start text-start gap-4 border-t-2 border-gray-500 text-base custom-list-style', children: props.todos.map((todo) => (_jsx("li", { className: 'flex flex-row justify-start items-start leading-loose', children: todo.text }, todo.id))) }) }));
};
export default TodoList;
