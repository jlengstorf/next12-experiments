import { NextRequest } from 'next/server';
import parser from 'ua-parser-js';

export async function middleware(req: NextRequest) {
  const ua = parser(req.headers.get('user-agent'));

  return new Response(
    JSON.stringify({
      country: req.geo.country || 'NA',
      city: req.geo.city || 'NA',
      ua,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
