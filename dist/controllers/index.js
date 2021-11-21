"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProduct = exports.updateProduct = exports.createProduct = exports.getAll = void 0;
const services_1 = require("../services");
const getAll = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all = yield (0, services_1.list)();
        return response.status(200).json(all);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAll = getAll;
const createProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, value } = request.body;
        const product = yield (0, services_1.create)({ name, description, value });
        return response.status(200).json(product);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, value } = request.body;
        const { id } = request.params;
        const product = yield (0, services_1.update)({ id, name, description, value });
        return response.status(200).json(product);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProduct = updateProduct;
const removeProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        yield (0, services_1.remove)(id);
        return response.status(200).json({ message: 'Product has been removed' });
    }
    catch (error) {
        console.log(error);
    }
});
exports.removeProduct = removeProduct;
