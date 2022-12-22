const List = ({todos}) => {
  const complete = () => {

  }
  return(
    <div>
      {todos.map((todo) => {
        return(
          <div key={todo.id}>
            <FontAwesomeIcon icon="fa-solid fa-check" />
            <button onClick={() => complete(todo.id)}>Done</button>
            <span>{todo.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default List;
