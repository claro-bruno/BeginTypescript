"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerProducts = void 0;
//import { Request, Response, Router } from "express";
const express_1 = require("express");
const controllers_1 = require("./controllers/");
// import CreateCourseService from './CreateCourseService';
// export default function createCourse(_request: Request, response: Response) {
//   //CreateCourseService.execute('NodeJS',10, 'Bruno'); // Passo 1
//   CreateCourseService.execute({
//     name: 'NodeJS',
//     duration: 10,
//     educator: 'Bruno'
//   }); // Passo 2
//   return response.send('Criado com sucesso');
// }
const routerProducts = (0, express_1.Router)({ mergeParams: true });
exports.routerProducts = routerProducts;
routerProducts.get('/', controllers_1.getAll);
routerProducts.post('/', controllers_1.createProduct);
routerProducts.put('/', controllers_1.updateProduct);
routerProducts.delete('/', controllers_1.removeProduct);
