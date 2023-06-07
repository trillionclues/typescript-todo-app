import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { PaperIcon } from '../assets/icons';
import { toast } from 'react-toastify';
const NewTodo = (props) => {
    const inputRef = useRef(null);
    const handleInputRef = (e) => {
        e.preventDefault();
        const textInput = inputRef.current?.value;
        if (!textInput || textInput.trim().length === 0) {
            // alert('Please enter a valid todo item!');
            toast.error('Nah! Please enter a valid todo item!', {
                position: 'top-center',
                autoClose: 3000,
                draggable: true,
            });
            return;
        }
        props.onAddHandler(textInput);
        inputRef.current.value = '';
        toast.success("You're the real flexxx!!!", {
            position: 'top-center',
            autoClose: 3000,
            draggable: true,
        });
    };
    return (_jsxs("form", { className: 'flex flex-col justify-start items-start text-white p-5', onSubmit: handleInputRef, children: [_jsx("label", { htmlFor: 'todo', className: 'mb-2 text-xl', children: "Add a new todo:" }), _jsxs("div", { className: 'flex flex-row justify-between items-center w-full', children: [_jsx("input", { ref: inputRef, type: 'text', id: 'todo', placeholder: 'Do something...', className: 'w-full p-2 rounded text-black' }), _jsx("button", { className: 'bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded ml-2', onSubmit: handleInputRef, children: _jsx(PaperIcon, {}) })] })] }));
};
export default NewTodo;
