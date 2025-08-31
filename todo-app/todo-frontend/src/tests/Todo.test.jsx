import { render, screen, queryByAttribute } from '@testing-library/react';
import Todo from '../Todos/Todo';

const getById = queryByAttribute.bind(null, 'id');

test('a todo is rendered correctly', () => {
  const todo = {
    _id: '9001',
    text: 'Testing Todo component in frontend',
    done: false,
  };

  const { container } = render(
    <Todo
      todo={todo}
      onClickComplete={() => console.log('clicked complete')}
      onClickDelete={() => console.log('cliked delete')}
    />
  );

  const text = screen.getByText(/Testing Todo component in frontend/i);
  expect(text).toBeDefined();

  const buttonDelete = getById(container, 'delete-button');
  expect(buttonDelete).toBeDefined();

  const buttonSetAsDone = getById(container, 'set-as-done-button');
  expect(buttonSetAsDone).toBeDefined();
});