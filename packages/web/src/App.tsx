import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Todo from './components/Todo';
import { ITodo } from './types/Todo';

const API_URL =
  'https://github5mhd6uyu3qxb-1xat--8080--810981ba.local-credentialless.webcontainer.io';

/** Task part 2.
 * 1. Add a handler to create a single Todo on "Add Todo" button press using a previously created endpoint (API_URL above)
 * 2. Render Todos using an existing Todo component
 */

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [title, setTitle] = useState('');

  async function handleSubmit() {
    const res = await axios({
      method: 'post',
      url: API_URL,
      data: { title },
    });
    console.log(res);
  }

  return (
    <div className="App">
      <div className="form-wrapper">
        <input
          type="text"
          placeholder="Add new todo"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn" type={'submit'} onClick={handleSubmit}>
          Add Todo
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>{/* Display todos */}</tbody>
      </table>
    </div>
  );
};

export default App;
