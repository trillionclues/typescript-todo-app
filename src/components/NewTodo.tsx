import { useRef, useState } from 'react';
import { PaperIcon } from '../assets/icons/index';
import { toast } from 'react-toastify';

interface NewTodoProps {
  onAddHandler: (text: string) => void;
  todos: { id: number; text: string }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
        isEditing: boolean;
      }[]
    >
  >;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputRef = (e: React.FormEvent) => {
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

    if (editTodoId !== null) {
      // edditing an existing todo
      props.setTodos((prevTodos) => {
        const updatedTodos = prevTodos.map((todo) =>
          todo.id === editTodoId
            ? { ...todo, text: textInput, isEditing: false }
            : { ...todo, isEditing: false }
        );
        return updatedTodos;
      });
      setEditTodoId(null);
    } else {
      // create a fresh todo
      props.onAddHandler(textInput);
      inputRef.current.value = '';
      toast.success("You're the real flexxx!!!", {
        position: 'top-center',
        autoClose: 3000,
        draggable: true,
      });
    }
  };

  return (
    <form
      className='flex flex-col justify-start items-start text-white p-5'
      onSubmit={handleInputRef}
    >
      <label htmlFor='todo' className='mb-2 text-xl'>
        {editTodoId !== null
          ? 'Edit the todo...'
          : "What's the plan for today?"}
      </label>
      <div className='flex flex-row justify-between items-center w-full'>
        <input
          ref={inputRef}
          type='text'
          id='todo'
          placeholder='Enter your todo...'
          className='w-full p-2 rounded text-black'
          defaultValue={
            editTodoId !== null
              ? props.todos.find((todo) => todo.id === editTodoId)?.text
              : ''
          }
        />
        <button
          className={'bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded ml-2'}
          onSubmit={handleInputRef}
        >
          <PaperIcon />
        </button>
      </div>
    </form>
  );
};

export default NewTodo;
