import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen w-full'>
        <h2 className='mb-5'>My Todo List!</h2>
        <div className='flex flex-col justify-center border border-2 py-10 px-10'>
          <NewTodo />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
