import List from "./List";
import Form from "./Form";
import { useState } from "react";


const Todo = () => {

  const todoList = [
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Do the dishes.",
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Prepare lunch for tomorrow.",
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Buy an apple.",
    },
  ]

  const [ todos, setTodos ] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) =>{
        return todo.id !== id
      })
    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return(
    <div className="todo">
      <Form createTodo={createTodo}/>
      <List todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default Todo;
