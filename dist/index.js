"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Kernel_1 = require("./Kernel/Kernel");
const Trace_1 = __importDefault(require("./Kernel/Errors/Trace"));
const app = (0, express_1.default)();
const kernel = new Kernel_1.Kernel();
kernel.run();
const { PORT } = process.env;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
}));
app.use(kernel.getRoutes());
app.use((error, req, res, next) => Trace_1.default.managerError(error, req, res));
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}/`);
});
//# sourceMappingURL=index.js.map