import { NextResponse } from 'next/server';
import { getCategory, updateCategory, deleteCategory } from '@lib/utils/category';
import { isAdmin } from '@/lib/utils/user';
import dbConnect from '@/lib/dbconnect';

// Path: app\api\categories\[id]\route.js
// GET /api/categories/[id]  - GET A CATEGORY
// PUT /api/categories/[id]  - UPDATE A CATEGORY
// DELETE /api/categories/[id]  - DELETE A CATEGORY

// connect to the database
dbConnect();

export async function GET(req: any, { params }: any) {
  const category = await getCategory(params.id);
  if (!category) {
    return NextResponse.json({ message: 'Category not found' }, { status: 404 });
  }
  return NextResponse.json(category, { status: 200 });
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
  const category = await updateCategory(params.id, data);
  return NextResponse.json(category, { status: 200 });
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
  const category = await deleteCategory(params.id);
  return NextResponse.json(category, { status: 202, statusText: 'category deleted' });
}
