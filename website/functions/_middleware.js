const STATIC_PREFIXES = ['/static/', '/assets/'];
const PASSTHROUGH_EXTENSIONS = new Set([
  '.md',
  '.txt',
  '.xml',
  '.json',
  '.css',
  '.js',
  '.mjs',
  '.map',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.svg',
  '.ico',
  '.woff',
  '.woff2',
]);

function wantsMarkdown(accept) {
  return typeof accept === 'string' && accept.includes('text/markdown');
}

function markdownPath(pathname) {
  if (pathname === '/' || pathname === '') {
    return '/index.md';
  }

  let path = pathname;
  if (path.endsWith('.html')) {
    path = path.slice(0, -5);
  }
  if (path.endsWith('/')) {
    return `${path}index.md`;
  }
  return `${path}.md`;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const accept = request.headers.get('Accept') || '';
  const url = new URL(request.url);
  const { pathname } = url;

  if (
    request.method !== 'GET' &&
    request.method !== 'HEAD'
  ) {
    return next();
  }

  if (!wantsMarkdown(accept)) {
    return next();
  }

  if (STATIC_PREFIXES.some(prefix => pathname.startsWith(prefix))) {
    return next();
  }

  const dot = pathname.lastIndexOf('.');
  if (dot !== -1) {
    const ext = pathname.slice(dot).toLowerCase();
    if (PASSTHROUGH_EXTENSIONS.has(ext)) {
      return next();
    }
  }

  const mdPath = markdownPath(pathname);
  const assetResponse = await env.ASSETS.fetch(new URL(mdPath, url.origin));
  if (!assetResponse.ok) {
    return next();
  }

  return new Response(assetResponse.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'Content-Signal': 'search=yes, ai-input=yes',
    },
  });
}
