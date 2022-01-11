import { useMemo } from "react";
import { Item } from "./Item";

export const ListItem = ({ todos, type, editTodo, checkboxHandler, removeItem }) =>  {

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
            removeItem={removeItem}
          />
        ))}
      </ul>
    );
}
