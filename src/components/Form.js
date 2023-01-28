import { useState } from "react";

const Form = ({createTodo}) => {

  const [enteredTodo, setEnteredTodo] = useState("");
  const addList = (e) => {
    e.preventDefault();

    if (enteredTodo !== ""){
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
      };
      createTodo(newTodo);

      setEnteredTodo("");
    }
  }
  return(
    <div className="form">
      <form className="form__style" onSubmit={addList}>
        <button onClick={addList}>Add</button>
        <input type="text"
               placeholder="Input ToDos here."
               onChange={(e) => setEnteredTodo(e.target.value)}
               value={enteredTodo}
        />
      </form>
    </div>
  )
}

export default Form;
