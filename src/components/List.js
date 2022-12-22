const List = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return(
    <div className="list">
      {todos.map((todo) => {
        return(
          <div className="list__content" key={todo.id}>
            <button onClick={() => complete(todo.id)}>Delete</button>
            <span>{todo.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default List;
