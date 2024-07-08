import { ITodo } from '../types/Todo';

type TodoProps = {
  todo: ITodo;
};

const Todo = ({ todo }: TodoProps) => {
  const { id, title, completed } = todo || {};

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <input type="checkbox" disabled checked={completed} />
      </td>
    </tr>
  );
};

export default Todo;
