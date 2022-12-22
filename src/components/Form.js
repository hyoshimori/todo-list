const Form = ({setEnteredTodo}) => {
  const addList = () => {

  }
  return(
    <div>
      <input type="text"
             onChange={
        (e) => setEnteredTodo(e.target.value)
        } />
      <button onClick={addList}>Updatse!</button>
      <p></p>
    </div>
  )
}

export default Form;
