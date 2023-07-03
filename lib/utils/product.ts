import Product from '../models/product';

// create a new product
export const createProduct = async (product: typeof Product) => {
  try {
    const newProduct = new Product(product);
    const result = await newProduct.save();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

// get all the products

export const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

// get a product
export const getProduct = async (id: string) => {
  try {
    const product = await Product.findById(id).populate('category');
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};

// update a product
export const updateProduct = async (id: string, updatedProduct: typeof Product) => {
  try {
    const newProduct = await Product.findByIdAndUpdate({ _id: id }, updatedProduct, {new: true});
    return newProduct;
  } catch (error: any) {
    throw new Error(error);
  }
};

// delete a product

export const deleteProduct = async (id: string) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};
