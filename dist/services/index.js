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
exports.remove = exports.update = exports.create = exports.list = void 0;
const uuid_1 = require("uuid");
let products = [];
function list() {
    return __awaiter(this, void 0, void 0, function* () {
        return products;
    });
}
exports.list = list;
function create({ name, value, description }) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = {
            id: (0, uuid_1.v4)(),
            name,
            value,
            description
        };
        products = [...products, product];
        return product;
    });
}
exports.create = create;
function update({ id, name, value, description }) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = {
            id,
            name,
            value,
            description
        };
        const indexId = products.findIndex((product) => product.id === id);
        products[indexId] = product;
        return product;
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        products = products.filter((product) => product.id !== id);
    });
}
exports.remove = remove;
