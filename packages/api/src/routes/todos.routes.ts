import Express from 'express';
import TodosController from '../controllers/todos.controller';

const router = Express.Router();

router.post('/todo', TodosController.createTodo);

export default router;
