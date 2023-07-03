import mongoose from 'mongoose';

const schema = mongoose.Schema;

const productSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    properties: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    images: {
      type: Array,
    },
    category: {
      type: [mongoose.Schema.Types.ObjectId], // array of category ids
      ref: 'Category',
    },
    subCategory: {
      type: [mongoose.Schema.Types.ObjectId], // array of category ids
      ref: 'Category',
    },
    color: {
      type: Array,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    discount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Array,
    },
    isPopular: {
      type: Boolean,
      default: false,
    },
    isRecommended: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isFreeShipping: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, strict: false },
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
