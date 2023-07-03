import { NextResponse } from 'next/server';
import { getProduct, updateProduct, deleteProduct } from '@lib/utils/product';
import { isAdmin } from '@/lib/utils/user';
import dbConnect from '@/lib/dbconnect';

// Path: app\api\products\[id]\route.js
// GET /api/products/[id]  - GET A PRODUCT
// PUT /api/products/[id]  - UPDATE A PRODUCT
// DELETE /api/products/[id]  - DELETE A PRODUCT

// connect to the database
dbConnect();

export async function GET(req: any, { params }: any) {
  const product = await getProduct(params.id);
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product, { status: 200 });
}

export async function PUT(req: any, { params }: any) {
  const token = req.headers.get('token');
  const user_id = req.headers.get('user_id');
  const admin = await isAdmin(token, user_id);
  if (!admin) {
    return NextResponse.json(
      { message: 'You are not authorized to make this request' },
      { status: 401 },
    );
  }
  const data = await req.json();
  const product = await updateProduct(params.id, data);
  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(req: any, { params }: any) {
  const token = req.headers.get('token');
  const user_id = req.headers.get('user_id');
  const admin = await isAdmin(token, user_id);
  if (!admin) {
    return NextResponse.json(
      { message: 'You are not authorized to make this request' },
      { status: 401 },
    );
  }
  const product = await deleteProduct(params.id);
  return NextResponse.json(product, { status: 202, statusText: 'Product deleted' });
}
