import Category from '@lib/models/category';

// create a new category
export const createCategory = async (category: typeof Category) => {
  try {
    const newCategory = new Category(category);
    const result = await newCategory.save();
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};


// get all the categories
export const getAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error: any) {
    throw new Error(error);
  }
};

// get a category
export const getCategory = async (id: string) => {
  try {
    const category = await Category.findById(id).populate('parent','children')
    return category;
  } catch (error: any) {
    throw new Error(error);
  }
};

// update a category
export const updateCategory = async (id: string, updatedCategory: typeof Category) => {
  try {
    const newCategory = await Category.findOneAndUpdate({ _id: id }, updatedCategory, {new: true});
    return newCategory;
  } catch (err: any) {
    throw new Error(err);
  }
};


// delete a category

export const deleteCategory = async (id: string) => {
  try {
    const category = await Category.findByIdAndDelete({ _id: id });
    return category;
  } catch (error: any) {
    throw new Error(error);
  }
};

