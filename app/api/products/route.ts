import { NextResponse } from 'next/server';
import { createProduct, getAllProducts } from '@/lib/utils/product';
import { isAdmin } from '@/lib/utils/user';
import dbConnect from '@/lib/dbconnect';


// Path: app\api\products\route.js
// POST /api/products  - CREATE PRODUCT
// GET /api/products  - GET ALL PRODUCTS

// connect to the database
dbConnect();

export async function POST(req: any) {
  const token = req.headers.get('token');
  const user_id = req.headers.get('user_id');
  const admin = await isAdmin(token, user_id);
  if (!admin) {
    return NextResponse.json({ message: 'You are not authorized to make this request' }, { status: 401 });
  }
  const data = await req.json();
  const product = await createProduct(data);
  return NextResponse.json(product, { status: 201 });
}

export async function GET(){
  const products = await getAllProducts();
  return NextResponse.json(products, { status: 200 });
}

