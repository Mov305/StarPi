import { NextResponse } from 'next/server';
import { getAllCategories, createCategory } from '@/lib/utils/category';
import { isAdmin } from '@/lib/utils/user';
import dbConnect from '@/lib/dbconnect';

// POST /api/categories - create a new category

dbConnect();

export async function POST(req: any) {
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
  const category = await createCategory(data);
  return NextResponse.json(category, { status: 201 });
}

// GET /api/categories - get all categories

export async function GET() {
  const categories = await getAllCategories();
  return NextResponse.json(categories, { status: 200 });
}
