import React from "react";
import styles from "./todoList.module.css";
import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, handleTodoAction }) => {
  // const todos = [
  //     {
  //         id: 1,
  //         title: "Learn React",
  //         completed: false
  //     },
  //     {
  //         id: 2,
  //         title: "Learn Typescript",
  //         completed: false
  //     },
  //     {
  //         id: 3,
  //         title: "Learn Javascript",
  //         completed: false
  //     }
  // ]

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          hanhandleTodoAction={handleTodoAction}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
