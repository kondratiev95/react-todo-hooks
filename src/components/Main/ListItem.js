import { useSelector } from "react-redux";
import { useMemo } from "react";
import { filterTypeSelector, getTodosSelector } from "../../redux/selectors/selectors";
import Item from "./TodoItem/Item.js";

const ListItem = ({ editTodo, checkboxHandler }) =>  {
  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);

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
