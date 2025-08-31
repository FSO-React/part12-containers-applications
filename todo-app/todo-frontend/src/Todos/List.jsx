import Todo from "./Todo"
import PropTypes from "prop-types";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  if (todos.length === 0) {
    return <div id="todo-list">No todos</div>
  }

  return (
    <div id="todo-list">
      {todos
        .map((todo, index) => {
          return (
            <Todo
              key={index}
              todo={todo}
              onClickDelete={onClickDelete}
              onClickComplete={onClickComplete}
            />
          )
        })
        .reduce(
          (acc, cur, index) => [...acc, <hr key={`hr-${index}`} />, cur], 
          []
        )
      }
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoList
