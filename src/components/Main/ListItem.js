import { useSelector } from "react-redux";
import { useMemo } from "react";
import useStyles from "./styles";
import { filterTypeSelector, getTodosSelector, getErrorSelector } from "../../redux/selectors/selectors";
import Item from "./TodoItem/Item.js";

const ListItem = ({ editTodo, checkboxHandler }) => {
  const type = useSelector(filterTypeSelector);
  const todos = useSelector(getTodosSelector);
  const errorMessage = useSelector(getErrorSelector);
  const classes = useStyles();

  const filteredTodos = useMemo(
    () =>
      todos.filter((item) => {
        if (type === "active") {
          return !item.completed;
        } else if (type === "completed") {
          return item.completed;
        } else {
          return item;
        }
      }),
    [todos, type]
  );

  return errorMessage === "" ? (
    <ul className={classes.todoList}>
      {filteredTodos.map((task) => (
        <Item
          task={task}
          key={task._id}
          editTodo={editTodo}
          checkboxHandler={checkboxHandler}
        />
      ))}
    </ul>
  ) : (
    <h4 className={classes.todoError}>{errorMessage}...</h4>
  );
};
export default ListItem;
