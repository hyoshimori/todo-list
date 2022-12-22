import List from "./List";
import Form from "./Form";
import { useState } from "react";


const Todo = () => {

  const todoListExamples = [
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Do the dishes",
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Prepare lunch for tomorrow",
    },
    {
      id: Math.floor(Math.random() * 1e5),
      content: "Buy an apple",
    },
  ]

  const [ todos, setTodos ] = useState(todoListExamples);


  return(
    <div>
      <List todos={todos} />
      <Form />
    </div>
  )
}

export default Todo;
