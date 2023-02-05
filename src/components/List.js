// import Timer from "./timer"

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
              <button onClick={() => complete(todo.id)}>Done</button>
              <span id="span">{todo.content}</span>
            </div>
            {/* <Timer /> */}
          </div>
        )
      })}
    </div>
  )
}

export default List;
