import { Router } from 'express';
import { getAll, createProduct, updateProduct, removeProduct } from './controllers/';

const routerProducts = Router({ mergeParams: true });

routerProducts.get('/', getAll);
routerProducts.post('/', createProduct);
routerProducts.put('/:id', updateProduct);
routerProducts.delete('/:id', removeProduct);


export { routerProducts };