import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import { Kernel } from './Kernel/Kernel';
import Trace from "./Kernel/Errors/Trace";

const app = express();
const kernel = new Kernel();

kernel.run();
const { PORT } = process.env;

app.use(express.json());
app.use(kernel.getRoutes());

app.use((error: any, req: Request, res: Response, next: NextFunction) => Trace.managerError(error, req, res));

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}/`);
});
