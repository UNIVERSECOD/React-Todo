import React, { useEffect, useRef, useState } from "react";
import styles from "./todoItem.module.css";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const TodoItem = ({ todo, handleTodoAction }) => {
  const { id, title, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const edirInputRef = useRef();

  const onEdit = (e) => {
    e.preventDefault();
    let title = edirInputRef.current.value;
    handleTodoAction("edit", {
        ...todo,
        title,
    } )
    setIsEditing(false);
  };

  const onCompletedChange = () => {
    handleTodoAction("edit", {
      ...todo,
      completed: !completed,
    });
  };

  const onDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      handleTodoAction("delete", todo);
    }
  };

  return (
    <div className="flex items-center justify-between boder- border-gray-300 p-2 my-2 rounded-md">
      <div className="flex items-center gap-x-1">
        <input
          checked={completed}
          onChange={onCompletedChange}
          type="checkbox"
          className="mr-3"
        />
        {isEditing ? (
          <form onSubmit={onEdit}>
            <input
              ref={edirInputRef}
              type="text"
              defaultValue={title}
              className="border border-gray-300 rounded-lg px-2 w-full focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200"
            />
          </form>
        ) : (
          <span className={completed ? "line-through" : ""}>{title}</span>
        )}
      </div>
      <div>
        <button className="cursor-pointer hover:scale-110 mr-2">
          {isEditing ? (
            <IoMdClose onClick={() => setIsEditing(false)} />
          ) : (
            <FaEdit onClick={() => setIsEditing(true)} />
          )}
        </button>

        <button className="text-red-500">
          <MdDelete onClick={onDelete} className="text-red-800" />
        </button>
      </div>
    </div>
  );
};
