import 'reflect-metadata';
import App from './src/app/App';
import { createServer } from 'http';

const { PORT } = process.env;
;
const server = createServer(App);

server.listen(PORT, () => {
  console.log(`Server is listening on: https://localhost:${PORT}/`);
});