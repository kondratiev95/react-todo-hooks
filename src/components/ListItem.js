import { useSelector } from "react-redux";
import { useMemo } from "react";
import Item from "./Item";

const ListItem = ({ editTodo, checkboxHandler }) =>  {
  const type = useSelector(state => state.todoReducer.type );
  const todos = useSelector(state => state.todoReducer.todos);

  const filteredTodos = useMemo(() => todos.filter(item => {
    if(type === 'active') {
      return !item.completed;
    } else if(type === 'completed') {
      return item.completed;
    } else {
      return item;
    }
  }), [todos, type]);

  return (
    <ul className="todo-list">
      {filteredTodos.map(task => (
        <Item 
          task={task} 
          key={task._id} 
          editTodo={editTodo}
          checkboxHandler={checkboxHandler}
        />
      ))}
    </ul>
  );
}
export default ListItem;
