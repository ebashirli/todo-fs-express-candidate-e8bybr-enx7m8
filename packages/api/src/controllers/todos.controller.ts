import { Request, Response } from 'express';
import axios from 'axios';

import { ITodo } from '../models/todo';
import { handleControllerError } from '../utils/default-handlers';

const url = 'https://jsonplaceholder.typicode.com/todos';

export default class TodosController {
  /** Task part 1.
   * 1. Add endpoint POST '/todo': create Todo item
   * 2. The second part of the task in the file 'packages/web/src/App.tsx'
   *
   *
   * DOCUMENTATION OF REST API METHOD
   * Creating a Todo
   * Method: POST
   * Url: 'https://jsonplaceholder.typicode.com/todos'
   * Response example: the posted body
   */

  /**
   * Create Todo.
   */
  public static createTodo = async (req: Request, res: Response) => {
    console.log(req);
  };
}
