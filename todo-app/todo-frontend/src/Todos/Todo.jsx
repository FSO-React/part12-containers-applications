import PropTypes from 'prop-types'

const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button id='delete-button' onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button id='delete-button' onClick={onClickDelete(todo)}> Delete </button>
        <button id='set-as-done-button' onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired
}

export default Todo
