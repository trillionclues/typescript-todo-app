import { DeleteTodoIcon, EditTodoIcon } from '../assets/icons/index';

interface TodoListProps {
  todos: { id: number; text: string }[];
  onDeleteTodoHandler: (id: number) => void;
  oneditTodoHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  // console.log(props.todos);
  return (
    <div className='flex flex-col justify-start items-start text-white p-3 text-base'>
      <ul className='w-full flex flex-start p-2 flex flex-col justify-start items-start text-start gap-4 border-t-2 border-gray-500 text-base custom-list-style'>
        {props.todos.map((todo) => (
          <div
            className='flex flex-row justify-between items-center w-full'
            key={todo.id}
          >
            <li className='flex flex-row justify-start text-lg items-start leading-loose w-[85%]'>
              {todo.text}
            </li>
            <div className='flex flex-row justify-center items-center gap-4'>
              <button
                className='
              flex flex-row justify-center items-center w-8 h-8 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600'
                onClick={props.oneditTodoHandler.bind(null, todo.id)}
              >
                <EditTodoIcon className='w-5 h-5 text-white' />
              </button>

              <button
                className='flex flex-row justify-center items-center w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600'
                onClick={props.onDeleteTodoHandler.bind(null, todo.id)}
              >
                <DeleteTodoIcon className='w-5 h-5 text-white' />
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
