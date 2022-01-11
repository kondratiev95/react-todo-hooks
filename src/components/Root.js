import { useState, useEffect, useCallback } from "react";
import { TodoForm } from "./TodoForm";
import { ListItem } from "./ListItem";
import { Footer } from "./Footer";
import { getData, addData, deleteItem, toggleItem, deleteCompleted, changeTodo, toggleAll} from "../api/todoAPI.js";

export const Root = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState('all');
  const [isAllTodosCompleted, setIsAllTodosCompleted] = useState(false);

  const updateState = useCallback((newState) => {
    const updatedCounter = newState.filter(item => item.completed === false).length
    setCounter(updatedCounter);
  }, []);

  const addItem = useCallback(val => {
    addData(val.todoInput).then(data => {
      setTodos([...data]);
      updateState(data);
    });
  }, [updateState]);
  
  const removeItem = useCallback(id => {
    deleteItem(id).then(data => {
      setTodos([...data]);
      updateState(data);
    })
  }, [updateState]);

  const checkboxHandler = useCallback( id => {
    toggleItem(id).then(data => {
      data.map(item => item.id === id ? {...item, completed: !item.completed} : item);
      setTodos([...data]);
      setIsAllTodosCompleted(data.every(todoItem => todoItem.completed));
      updateState(data);
    })
  }, [updateState]);

  const handleAllCompleted = useCallback(() => {
    setIsAllTodosCompleted(!isAllTodosCompleted);
    toggleAll(isAllTodosCompleted).then(data => {
      setTodos([...data]);
      updateState(data);
    })
  }, [isAllTodosCompleted, updateState]);

  const editTodo = useCallback((id, value) => {
    changeTodo({id, value}).then(data => {
      setTodos([...data]);
    });
  }, []);

  const filterTodosType = useCallback(e => {
    setType(e.target.getAttribute('data-type'));
  }, []);

  const deleteCompletedTodo = useCallback(() => {
    deleteCompleted().then(data => {
      setTodos([...data]);
      setIsAllTodosCompleted(false);
    })
  }, []);

  useEffect(() => {
    getData().then(data => {
      setTodos([...data]);
      updateState(data);
    });
  }, [updateState]);

  return (
    <div className="todo-container">
      <TodoForm
        addItem={addItem}
        handleAllCompleted={handleAllCompleted}
        todos={todos}
        isAllTodosCompleted={isAllTodosCompleted}
      />
      <ListItem
        editTodo={editTodo}
        checkboxHandler={checkboxHandler}
        removeItem={removeItem}
        type={type}
        todos={todos}
      />
      { 
        todos.length 
        ? 
        <Footer 
          filterTodosType={filterTodosType }
          deleteCompletedTodo={deleteCompletedTodo}
          todos={todos}
          counter={counter}
          type={type}
        />
        : null }
    </div>
  );  
}