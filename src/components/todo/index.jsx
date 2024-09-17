import React from 'react'
import TodoInput from './TodoInput'
import styles from "./style.css"
import TodoList from './TodoList'

export const Todo = () => {
  const [todos, setTodos] = useState ([]);

  function handleTodoAction (type, todo) {
    if (type==="edit"){
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    todos[todoIndex].completed = todo.completed;
    todos[todoIndex].title = todo.title;
    setTodos([...todos]);
    } else if(type === "delete") {
      setTodos(todos.filter((t) => t.id !== todo.id ));
    }
  }

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <TodoInput setTodos={setTodos} />
      <TodoList handleTodoAction={handleTodoAction} todos = {todos} />
    </div>
  ) 
}

export default Todo
