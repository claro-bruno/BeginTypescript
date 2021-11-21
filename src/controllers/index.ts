import { z }  from 'zod';
import { Request, Response } from "express";
import { list , create, update, remove } from '../services';


const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  value: z.number(),
  description: z.string()
});

type IProduct = z.infer<typeof ProductSchema>;

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

    const result = ProductSchema.safeParse({ name, description, value });

    if (!result.success) {
      return response.status(402).json(result);
    }

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

    const result = ProductSchema.safeParse({ name, description, value });

    if (!result.success) {
      return response.status(402).json(result);
    }

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