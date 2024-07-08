import { App } from './src/app/App.js';
import 'dotenv/config.js';

const { PORT } = process.env;

new App()._app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
