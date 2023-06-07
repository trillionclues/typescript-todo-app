import { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { TodoModel } from './todo.model';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random(), text: text, isEditing: false },
      ];
    });
  };

  const deleteTodoHandler = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodoHandler = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: true }
          : { ...todo, isEditing: false }
      );
      return updatedTodos;
      console.log(updatedTodos);
    });
  };

  return (
    <>
      <div className='h-full text-center mt-16 md:mt-24 w-full'>
        <h2 className='mb-10 text-xl uppercase font-bold tracking-wider'>
          My Todo List!
        </h2>
        <div className='flex flex-col md:w-1/2 w-96 mx-auto border border-gray-300 rounded-md'>
          <div>
            <NewTodo
              onAddHandler={addTodoHandler}
              setTodos={setTodos}
              todos={todos}
            />

            {todos.length > 0 ? (
              <TodoList
                todos={todos}
                onDeleteTodoHandler={deleteTodoHandler}
                oneditTodoHandler={editTodoHandler}
              />
            ) : (
              <div className='p-5'>
                <p className='text-gray-400 text-lg'>No todos found...</p>
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
