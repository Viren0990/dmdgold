import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Only protect the /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');

    // Expected credentials from .env
    const USER = process.env.ADMIN_USERNAME || 'admin';
    const PASS = process.env.ADMIN_PASSWORD || 'password';
    
    // Base64 encode the credentials
    const expectedAuth = `Basic ${Buffer.from(`${USER}:${PASS}`).toString('base64')}`;

    if (basicAuth !== expectedAuth) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

// Config to apply middleware only to specific paths
export const config = {
  matcher: ['/admin/:path*'],
};
