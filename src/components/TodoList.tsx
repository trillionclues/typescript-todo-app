interface TodoListProps {
  todos: { id: number; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  console.log(props.todos);
  return (
    <div className='flex flex-col justify-start items-start text-white p-3 text-base'>
      <ul className='w-full flex flex-start p-2 flex flex-col justify-start items-start text-start gap-4 border-t-2 border-gray-500 text-base custom-list-style'>
        {props.todos.map((todo) => (
          <li
            key={todo.id}
            className='flex flex-row justify-start items-start leading-loose'
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
