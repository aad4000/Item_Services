import { NextResponse } from 'next/server';

export function middleware(req) {
  const isAuthenticated = req.cookies.get('isAuthenticated');
  const { pathname } = req.nextUrl; // Get the requested path

  console.log('Middleware triggered for:', pathname);
  console.log('Authenticated:', isAuthenticated);

  // Skip middleware for public paths and static files
  const PUBLIC_PATHS = ['/login', '/favicon.ico'];
  const isStaticFile = pathname.startsWith('/_next/');

  if (PUBLIC_PATHS.includes(pathname) || isStaticFile) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/login';
    loginUrl.searchParams.set('redirect', pathname); // Store intended destination
    return NextResponse.redirect(loginUrl);
  }

  // Allow authenticated users
  return NextResponse.next();
}
