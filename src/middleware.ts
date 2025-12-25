import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a cryptographically secure random nonce for this request
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  const nonce = Buffer.from(array).toString('base64');
  
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  
  // Add the nonce to the request headers so it can be accessed in pages/components
  requestHeaders.set('x-nonce', nonce);
  
  // Set CSP header with nonce and strict-dynamic
  // Based on lamprosdao usage:
  // - Notion API (api.notion.so)
  // - Forum APIs (forum.arbitrum.foundation, forum.superfluid.org, forum.scroll.io)
  // - External links (x.com, dune.com, vote.optimism.io, etc.) - these are just links, not embedded
  // - Local fonts (no external font CDN)
  // - GSAP (local package)
  // - Cloudflare Insights (injected by Cloudflare CDN)
  // Using nonce + strict-dynamic: allows scripts with nonce AND scripts loaded by those scripts
  // This is the recommended approach for Next.js apps (no hash maintenance needed)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://static.cloudflareinsights.com;
    connect-src 'self' https://api.notion.com https://api.notion.so https://forum.arbitrum.foundation https://forum.superfluid.org https://forum.scroll.io https://cloudflareinsights.com https: wss:;
    style-src 'self' 'unsafe-inline' https:;
    img-src 'self' data: https: blob:;
    font-src 'self' data:;
    frame-src 'self';
    object-src 'none';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s{2,}/g, ' ').trim();
  
  // Create response with updated headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  
  // Set CSP header
  response.headers.set('Content-Security-Policy', cspHeader);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
