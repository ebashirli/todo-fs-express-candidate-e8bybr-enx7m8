import Express from 'express';
import cors from 'cors';

import { todosRouter, defaultRouter } from './routes';
import { handleError, handleNotFound } from './utils/default-handlers';

const app = Express();

app.use(cors());
app.use(Express.json());

// Route handlers
app.use(defaultRouter);
app.use(todosRouter);

// Catch 404 and forward to error handler
app.use(handleNotFound);

// Error handler
app.use(handleError);

export default app;
