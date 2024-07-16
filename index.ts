import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { Kernel } from './Kernel/Kernel';

const app = express();
const kernel = new Kernel();

kernel.run();
const { PORT } = process.env;

app.use(express.json());
app.use(kernel.getRoutes());

app.use((error: any, req: Request, res: Response, next: NextFunction) => kernel.managerError(error, req, res));

app.listen(PORT, () => {
  console.log(`Server is listening on: https://localhost:${PORT}/`);
});
