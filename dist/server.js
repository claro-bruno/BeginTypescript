"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import createCourse  from './routes';
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/products', routes_1.routerProducts);
// app.get('/', (_req, res) => {
//   res.send('Hello Worldddd!');
// });
// Passo 2 
// app.get('/', createCourse);
// app.use((err, req, res, _next) => {
//   res.status(500).json({ error: `Message: ${err.message}` });
// });
app.listen('3000', () => {
    console.log('Listening...');
});
