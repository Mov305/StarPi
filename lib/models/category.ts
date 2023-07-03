import mongoose from 'mongoose';

const schema = mongoose.Schema;

const categorySchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    parent: {
      // make a reference to the category schema
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    children: {
      // make a reference to the category schema
      type: [mongoose.Schema.Types.ObjectId], // array of category ids
      ref: 'Category',
    },
    properties: {
      type: Array,
    },
  },
  { timestamps: true, strict: false },
);

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
