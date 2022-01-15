import { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector} from "react-redux";
import { actions } from "../redux/actions";
import TodoForm from "./TodoForm";
import ListItem from "./ListItem";
import Footer from "./Footer";

const Root = () => {

  const todosArray = useSelector(state => state.todoReducer.todos);
  const dispatch = useDispatch();

  let isAllCompleted = useMemo(() =>  todosArray.every(item => item.completed), [todosArray]);

  const handleAllCompleted = useCallback(() => {
    dispatch({ type: actions.TOGGLE_ALL.REQUEST, payload: isAllCompleted});
  }, [isAllCompleted, dispatch]);

  const editTodo = useCallback((id, value) => {
    dispatch({ type: actions.EDIT_TODO.REQUEST, payload: { id, value }});
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: actions.GET_TODOS.REQUEST});
  }, []);

  return (
    <>
      <h1>todos</h1>
      <div className="todo-container">
        <TodoForm
          handleAllCompleted={handleAllCompleted}
          isAllCompleted={isAllCompleted}
        />
        <ListItem
          editTodo={editTodo}
        />
        { todosArray.length ? <Footer/> : null }
      </div>
    </>
  );  
}
export default Root;