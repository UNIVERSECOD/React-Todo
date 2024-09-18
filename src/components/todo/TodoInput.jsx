import React, {useRef} from 'react'
import styles from "./todoInput.module.css"

export const TodoInput = ({setTodos}) => {
   const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: inputRef.current.value,
      completed: false,
    }
    setTodos((prev) => [todo, ...prev])
  }


  return (
    <form onSubmit={handleSubmit} className='mt-5'>
      <input 
      ref={inputRef}
      type="text"
      onChange={(e) => inputRef.current.value = e.target.value }
      placeholder='Enter your todo'
      className='' />
    </form>
  )
}

export default TodoInput
