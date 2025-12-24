import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next();
  
  // Set CSP header
  // Based on lamprosdao usage:
  // - Notion API (api.notion.so)
  // - Forum APIs (forum.arbitrum.foundation, forum.superfluid.org, forum.scroll.io)
  // - External links (x.com, dune.com, vote.optimism.io, etc.) - these are just links, not embedded
  // - Local fonts (no external font CDN)
  // - GSAP (local package)
  // - Cloudflare Insights (injected by Cloudflare CDN)
  // Note: 'unsafe-inline' is required for Next.js inline scripts (hydration, runtime, etc.)
  // No nonce needed since there are no custom inline scripts in this project
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com;
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
