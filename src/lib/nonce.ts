import { headers } from 'next/headers';

/**
 * Get the CSP nonce from request headers
 * This should be used in server components to get the nonce for inline scripts
 */
export async function getNonce(): Promise<string> {
  const headersList = await headers();
  return headersList.get('x-nonce') || '';
}

