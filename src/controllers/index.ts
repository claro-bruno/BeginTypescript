
import { Request, Response } from "express";
import { list , create, update, remove } from '../services';

const getAll = async (request: Request, response: Response) => {
  try {
    const all = await list();
    return response.status(200).json(all);
  } 
  catch (error) {
    console.log(error);
  }

}

const createProduct = async (request: Request, response: Response) => {
  try {
    const { name, description, value } = request.body;
    const product = await create({ name, description, value });
    return response.status(200).json(product);
    
  } 
  catch (error) {
    console.log(error);
  }
}

const updateProduct = async (request: Request, response: Response) => {
  try {
    const { name, description, value } = request.body;
    const { id } = request.params;

    const product = await update({ id, name, description, value });
    return response.status(200).json(product);
    
  } 
  catch (error) {
    console.log(error);
  }
}

const removeProduct = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    await remove(id);
    return response.status(200).json({ message: 'Product has been removed'});
    
  } 
  catch (error) {
    console.log(error);
  }
}

export { getAll, createProduct, updateProduct, removeProduct }