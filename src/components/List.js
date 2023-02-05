const List = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return(
    <div className="list">
      {todos.map((todo) => {
        return(
          <div className="list__content" key={todo.id}>
            <div className="list__content__btn__task">
              <button role="deleteButton" aria-checked="false" aria-labelledby="foo" onClick={() => complete(todo.id)}>Done</button>
              <span role="heading" aria-checked="false" aria-labelledby="foo">{todo.content}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List;
