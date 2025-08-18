import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/dashboard', request.url));
}

export const config = {
  matcher: '/',
};
