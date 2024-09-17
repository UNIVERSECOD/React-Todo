import React from "react";
import styles from "./todoItem.module.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


export const TodoItem = ({ todo, handleTodoAction }) => {
  const { id, title, completed } = todo;

  const onCompletedChange = () => {
    handleTodoAction( "edit", {
        ...todo, 
        completed: !completed, 
    });
  }

  const onDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
    handleTodoAction("delete", todo);
    }
  };

  return (
    <div className="flex items-center justify-between boder- border-gray-300 p-2 my-2 rounded-md ">
      <div>
        <input
        onChange={onCompletedChange} 
        type="checkbox" 
        className="mr-3" 
        />
        <span className={completed ? "line-through" : ""}>{title}</span>
      </div>
      <div>
        <button>
        <FaEdit />
       </button>
        <button className="text-red-500">
          <MdDelete onClick= {onDelete} className="text-red-800" />
        </button>
      </div>
    </div>
  );
};
