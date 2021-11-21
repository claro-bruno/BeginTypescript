import { v4 as uuidV4 } from 'uuid';

interface IProduct {
  id?: string;
  name: string;
  value: number;
  description: string;
}

// let products = <IProduct[]>[];
// let products: IProduct[] = [];

let products = new Array<IProduct>();

const list = async (): Promise<IProduct[]> => {
  return products;
}

const create = async ({ name, value, description }: IProduct ): Promise<IProduct> => {
  const product = {
    id: uuidV4(),
    name, 
    value, 
    description 
  };

  const productExists = products.some((product) => product.name === name);
  if(productExists) {
    throw new Error('Product already exists');
  }

  products = [ ...products, product ];
  return product;
}

const update = async ({ id, name, value, description }: IProduct): Promise<IProduct> => {
  const product = {
    id, 
    name, 
    value, 
    description 
  };

  const indexId = products.findIndex((product) => product.id === id);
  if(indexId) {
    throw new Error('Product does not exists');
  }
  products[indexId] = product;

  return product;
}

const remove = async (id: string ): Promise<void> => {
  const productExists = products.some((product) => product.id === id);
  if(!productExists) {
    throw new Error('Product does not exists');
  }
  products = products.filter((product) => product.id !== id);
}

export { list, create, update, remove };