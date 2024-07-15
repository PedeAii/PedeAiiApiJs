import { App } from './src/app/App.js';
import { createServer } from 'http';

const { PORT } = process.env;

createServer(new App()._app).listen(PORT, () => {
    console.log(`Server is listening on: https://localhost:${PORT}/`);
});
